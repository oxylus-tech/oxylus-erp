from ox.core import apps

from django.utils.translation import gettext_lazy as _


__all__ = ("AppConfig",)


class AppConfig(apps.AppConfig):
    name = "ox_erp.contacts_mails"
    label = "ox_contacts_mails"
    verbose_name = _("Contacts")
    icon = "mdi-card-account-mail"

    root_url = "ox/contacts-mails"
    npm_package = "@oxylus/contacts-mails"

    dependencies = ("ox.apps.mails", "ox_erp.contacts")
