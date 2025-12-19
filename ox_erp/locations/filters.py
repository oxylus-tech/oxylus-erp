import django_filters as filters

from . import models


__all__ = ("CountryFilterSet",)


class CountryFilterSet(filters.FilterSet):
    continent = filters.NumberFilter()

    class Meta:
        model = models.Country
        fields = {
            "continent": ["exact"],
            "name": ["icontains", "exact"],
            "phone_prefixes__prefix": ["exact", "startswith"],
        }
