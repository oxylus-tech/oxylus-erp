from django.utils.translation import gettext_lazy as _

from ox.core.panels import registry
import ox_erp.contacts.panels  # noqa: F401
from ox.core.panels import Panel, Panels

panels = Panels(
    "contacts_mails",
    _("Contact Mails"),
    order=100,
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

registry["contacts"].append(panels)
