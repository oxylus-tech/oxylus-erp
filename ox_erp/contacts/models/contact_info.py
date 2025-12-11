from django.db import models
from django.utils.translation import gettext_lazy as _

from ox.core.models import Model
from ox_erp.locations.models import Country
from ox.utils.models import Named

from .contact import Contact

__all__ = ("ContactInfoKind", "ContactInfo", "Address", "Phone", "Email", "BankAccount")


# TODO: rename
class ContactInfoKind(models.IntegerChoices):
    MAIN = 0x00, _("Main")
    PROFESSIONAL = 0x01, _("Professional")
    HOME = 0x02, _("Home")
    LEGAL = 0x03, _("Legal")
    OTHER = 0x10, _("Other")


class ContactInfo(Model):
    contact = models.ForeignKey(Contact, models.CASCADE, verbose_name=_("Contact"))
    kind = models.SmallIntegerField(_("Info kind"), default=ContactInfoKind.MAIN, choices=ContactInfoKind.choices)

    class Meta:
        abstract = True


class Address(ContactInfo):
    street = models.CharField(_("Street"), max_length=128)
    street_2 = models.CharField(_("Street 2"), max_length=128, default="", blank=True)
    number = models.CharField(_("Number"), max_length=16)
    box = models.CharField(_("Box"), max_length=16, default="", blank=True)
    postcode = models.PositiveIntegerField(_("Postcode"))
    city = models.CharField(_("City"), max_length=128)
    country = models.ForeignKey(Country, models.CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = _("Address")
        verbose_name_plural = _("Addresses")


class Phone(ContactInfo):
    number = models.CharField(_("Phone"), max_length=32)

    class Meta:
        verbose_name = _("Phone")
        verbose_name_plural = _("Phones")


class Email(ContactInfo):
    email = models.EmailField(_("Email"))

    class Meta:
        verbose_name = _("Email")
        verbose_name_plural = _("Emails")
        default_related_name = "email_set"


class BankAccount(ContactInfo, Named):
    iban = models.CharField(_("IBAN"), max_length=40)
    bic = models.CharField(_("SWIFT/BIC"), max_length=11)
    address = models.CharField(_("Address"), max_length=128)
    bank_name = models.CharField(_("Bank Name"), max_length=128)

    class Meta:
        verbose_name = _("IBAN Account")
        verbose_name_plural = _("IBAN Accounts")
