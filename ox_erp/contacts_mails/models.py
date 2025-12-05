from functools import cached_property

from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User, Group

from ox.apps.mails.models import BaseMail
from ox_erp.contacts.models import ContactList, Contact


__all__ = ("ContactMail",)



class ContactMail(BaseMail):
    recipients = models.ManyToManyField(
        Contact, verbose_name=_("Recipients")
    )
    recipient_lists = models.ManyToManyField(
        ContactList, verbose_name=_("Recipient lists")
    )

    State = BaseMail.State

    class Meta:
        verbose_name = _("Contact Mail")
        verbose_name_plural = _("Contact Mails")

    def get_recipients(self):
        """ Return contacts """
        recipients = {}

        query = self.recipient_lists.all().prefetch_related("contacts")

        # first those with subscriptions, to enforce "unsubscribe" option.
        for contact_list in query.filter(is_subscription=True):
            self._get_recipients_from_list(contact_list, recipients)

        for contact_list in query.filter(is_subscription=False):
            self._get_recipients_from_list(contact_list, recipients)

        for contact in self.recipients.all():
            if contact.email not in recipients:
                recipients[contact.email] = self._get_recipient_context(contact)

        return list(recipients.items())


    def _get_recipients_from_list(self, contact_list, recipients):
        for contact in contact_list.contacts.all():
            if contact.email not in recipients:
                recipients[contact.email] = self._get_recipient_context(contact, **context)

    def _get_recipient_context(self, contact, **context):
        """ Return email context for the provided contact """
        return {
            **context,
            "contact": {
                **context.get("contact", {}),
                "email": contact.email,
                "name": contact.full_name,
                "preferences_url": self._get_preferences_url(contact),
            }
        }

    def _get_preferences_url(self, contact):
        """ Provide unsubscription url. """
        return ""

