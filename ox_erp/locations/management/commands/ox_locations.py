from pathlib import Path
import yaml

import pycountry
from phonenumbers.phonenumberutil import country_code_for_region

from ox.utils import commands
from ox_erp.locations.models import Country, PhonePrefix


class Command(commands.Command):
    """
    Handle ox locations.
    """

    help = "Handle tasks related to ox_locations."

    def add_arguments(self, parser):
        subparsers = parser.add_subparsers()

        group = subparsers.add_parser(
            "load", help="Import initial data in db. This is used to generate fixtures afterward."
        )
        group.set_defaults(func=self.handle_load)
        group.add_argument("-c", "--countries", action="store_true", help="Load country data")
        group.add_argument("-p", "--phones", action="store_true", help="Load phone prefixes")

    def handle_load(self, countries=False, phones=False, **kwargs):
        if countries:
            self.load_countries()
        if phones:
            self.load_phones()

    def load_countries(self):
        """Initialize all countries, updating existing ones."""
        countries = Country.objects.all()
        kws = self._countries_kwargs()

        updated = []
        keys = None
        for country in countries:
            if kw := kws.pop(country.code, None):
                country.__dict__.update(kw)
                updated.append(country)
                if not keys:
                    keys = kw.keys()

        updated and Country.objects.bulk_update(updated, keys)
        if kws:
            Country.objects.bulk_create(Country(**kw) for kw in kws.values())

    def _countries_kwargs(self):
        """Return a list of init args for all countries"""
        return {
            country.alpha_2: {
                "code": country.alpha_2,
                "code_3": country.alpha_3,
                "name": country.name,
            }
            for country in pycountry.countries
        }

    def load_phones(self):
        path = Path(__file__).parent.parent.parent / "data" / "data-phone-prefixes.yaml"
        with open(path) as stream:
            data = yaml.load(stream, Loader=yaml.Loader)

        items = []
        for country in Country.objects.all():
            # FIXME: avoid deletion
            country.phone_prefixes.all().delete()

            if prefixes := data.get(country.code):
                items.extend(PhonePrefix(country=country, prefix=prefix) for prefix in prefixes)
            elif prefix := country_code_for_region(country.code):
                items.append(PhonePrefix(country=country, prefix=prefix))

        PhonePrefix.objects.bulk_create(items)
        self.log(f"{len(items)} phone prefixes imported")
