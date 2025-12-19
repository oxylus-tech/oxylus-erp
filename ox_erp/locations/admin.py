from django.contrib import admin

from . import models


@admin.register(models.Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ["code", "code_3", "flag", "name"]
    search_fields = [
        "name",
    ]


@admin.register(models.Currency)
class CurrencyAdmin(admin.ModelAdmin):
    list_display = ["name", "code", "numeric", "decimals", "is_iso", "valid_to"]
    search_fields = [
        "name",
    ]
