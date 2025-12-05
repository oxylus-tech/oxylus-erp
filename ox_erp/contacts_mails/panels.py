from django.utils.translation import gettext_lazy as _

from ox_erp.contacts import panels # noqa: F401
from ox.core.panels import registry, Panel, Panels

panels = Panels(
    "contacts",
    _("Contacts"),
    items=[
        Panel(
            "contactmails",
            _("Contact Mails"),
            "mdi-card-account-mail",
            "ox-contact-mail-panel",
            url="ox_contacts_mails:index",
            order=100,
            permission="ox_contacts_mails.view_contactmail",
        ),
    ],
)

registry["contacts"].append(panels["contactmails"])
