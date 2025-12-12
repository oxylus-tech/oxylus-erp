from rest_framework import serializers

from ox.core.serializers import RelatedField, ModelSerializer
from ox.apps.mails.serializers import BaseMailSerializer

from ox_erp.contacts.models import Contact, ContactList, Subscription
from . import models


__all__ = ("ContactMailSerializer",)


class ContactMailSerializer(BaseMailSerializer):
    recipients = RelatedField(queryset=Contact.objects.all(), many=True)
    recipient_lists = RelatedField(queryset=ContactList.objects.all(), many=True)

    class Meta:
        model = models.ContactMail
        fields = "__all__"


class ContactSubscription(ModelSerializer):
    """Subscription serializer used for contacts to manage their subscriptions."""

    name = serializers.CharField(source="contact_list__name", read_only=True)
    """ The contact list name. """
    description = serializers.CharField(source="contact_list__description", read_only=True)
    """ Contact list description. """
    contact = serializers.CharField(source="contact__name", read_only=True)
    """ Contact's informations. """
    contact_email = serializers.CharField(source="contact__email", read_only=True)
    """ Contact's informations. """

    class Meta:
        model = Subscription
        fields = ("name", "description", "contact", "status")
