from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import Group

from ox.core.models import Model
from ox.utils.models import Described, Colored, SaveHook, Timestamped
from .contact import Contact


__all__ = (
    "ContactList",
    "SubscriptionStatus",
    "Subscription",
)


class SubscriptionStatus(models.IntegerChoices):
    """Status of a contact subscription."""

    INVITED = 0x01, _("Invitation Send")
    SUBSCRIBED = 0x02, _("Subscribed")
    UNSUBSCRIBED = 0x03, _("Unsubscribed")


class Subscription(Timestamped, Model):
    """A contact subscription to a ContactList."""

    contact_list = models.ForeignKey("ox_contacts.contactlist", models.CASCADE, verbose_name=_("Contacts"))
    contact = models.ForeignKey(Contact, models.CASCADE, verbose_name=_("Contact"))
    status = models.IntegerField(_("Status"), choices=SubscriptionStatus.choices, default=SubscriptionStatus.SUBSCRIBED)

    class Meta:
        verbose_name = _("Subscription")
        verbose_name_plural = _("Subscriptions")


class ContactList(Described, Colored, SaveHook, Model):
    """Provide a list of contacts."""

    group = models.OneToOneField(
        Group,
        models.CASCADE,
        blank=True,
        null=True,
        verbose_name=_("Group"),
        related_name="contact_list",
        help_text=_("This list is related to a group"),
    )
    organisation = models.OneToOneField(
        "ox_contacts.organisation",
        models.CASCADE,
        blank=True,
        null=True,
        related_name="contact_list",
        verbose_name=_("Organisation"),
        help_text=_("This list is related to an organisation"),
    )
    is_subscription = models.BooleanField(
        _("Subscription list"),
        default=False,
        help_text=_(
            "This list is used for mailing-lists. It allows contacts to "
            "unsubscribe from the list among other things."
        ),
    )
    contacts = models.ManyToManyField(
        Contact,
        blank=True,
        verbose_name=_("Contacts"),
        related_name="contact_lists",
        through=Subscription,
        through_fields=("contact_list", "contact"),
    )

    class Meta:
        verbose_name = _("Contact List")
        verbose_name_plural = _("Contact Lists")

    def on_save(self, fields):
        """Synchronise data with related group and organisation."""
        if self.group:
            self.name = self.group.name

            if self.organisation:
                raise ValueError("Organisation can't be set when group is set.")

        elif self.organisation:
            self.name = self.organisation.name
            self.color = self.organisation.color
