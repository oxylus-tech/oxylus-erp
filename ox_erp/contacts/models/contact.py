from functools import cached_property

from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User

from ox.core.models import Model, InheritanceQuerySet
from ox_erp.locations.models import Country
from ox.utils.models import LongNamed, Described, Colored

from .contact_list import ContactList, Subscription

__all__ = (
    "ContactQuerySet",
    "Contact",
    "Person",
    "Organisation",
    "OrganisationType",
)


class ContactQuerySet(InheritanceQuerySet):
    """Queryset for a Contact."""

    def with_infos(self):
        return self.prefetch_related("address_set", "phone_set", "email_set")


class Contact(Model):
    email = models.EmailField(_("Email"), unique=True, blank=True, null=True)
    """ When linked to user, this is User's email. """
    contact_lists = models.ManyToManyField(
        ContactList, blank=True, verbose_name=_("Lists"), related_name="contacts", through=Subscription
    )

    objects = ContactQuerySet.as_manager()

    @cached_property
    def full_name(self) -> str:
        if person := getattr(self, "person", None):
            return person.full_name
        elif org := getattr(self, "organisation", None):
            return org.name
        return ""

    class Meta:
        verbose_name = _("Contact")
        verbose_name_plural = _("Contacts")


class OrganisationType(LongNamed, Model):
    """Represent a kind of Organisation."""

    country = models.ForeignKey(Country, models.CASCADE, verbose_name=_("Country"))
    code = models.CharField(_("Code"), max_length=8, blank=True, default="")
    abbreviation = models.CharField(_("Abbreviation"), max_length=512, blank=True, default="")
    language_code = models.CharField(_("Language Code"), max_length=4, blank=True, default="")

    class Meta:
        verbose_name = _("Company Form")
        verbose_name_plural = _("Company Forms")


class Organisation(Described, Colored, Contact):
    short_name = models.CharField(_("Short Name"), max_length=32, null=True, blank=True)
    reference = models.CharField(_("Reference Number"), max_length=32, default="", blank=True)
    vat = models.CharField(_("VAT"), max_length=32, blank=True, null=True)
    type = models.ForeignKey(
        OrganisationType, models.SET_NULL, null=True, blank=True, verbose_name=_("Organisation Type")
    )
    country = models.ForeignKey(Country, models.SET_NULL, null=True, blank=True, verbose_name=_("Country"))

    class Meta:
        verbose_name = _("Organisation")
        verbose_name_plural = _("Organisations")


class Person(Contact):
    user = models.OneToOneField(
        User,
        models.CASCADE,
        null=True,
        blank=True,
        related_name="contact",
        verbose_name=_("User"),
        help_text=_("This contact is related to a user of the plateform"),
    )
    first_name = models.CharField(_("First name"), default="", max_length=64)
    last_name = models.CharField(_("Last name"), default="", max_length=64)
    organisations = models.ManyToManyField(
        Organisation, blank=True, verbose_name=_("Organisations"), related_name="persons"
    )

    class Meta:
        verbose_name = _("Person")
        verbose_name_plural = _("Persons")

    @property
    def full_name(self):
        return f"{self.last_name} {self.first_name}"

    def __str__(self):
        return self.full_name
