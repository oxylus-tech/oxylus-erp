from rest_framework import serializers

from ox.core.serializers import RelatedField, ModelSerializer, NestedSerializer
from ox.apps.mails.serializers import BaseMailSerializer

from ox_erp.contacts.models import Contact, ContactList, Subscription
from . import models


__all__ = ("ContactMailSerializer", "SubscriptionSerializer", "ContactSubscriptionsSerializer")


class ContactMailSerializer(BaseMailSerializer):
    recipients = RelatedField(queryset=Contact.objects.all(), many=True)
    recipient_lists = RelatedField(queryset=ContactList.objects.all(), many=True)

    class Meta:
        model = models.ContactMail
        fields = "__all__"


class SubscriptionSerializer(ModelSerializer):
    """Subscription serializer used for contacts to manage their subscriptions."""

    id = serializers.UUIDField(source="uuid", required=False)
    """ This value is write allowed, NestedSerializer ensure it already exists. """
    name = serializers.CharField(source="contact_list.name", read_only=True)
    """ The contact list name. """
    description = serializers.CharField(source="contact_list.description", read_only=True)
    """ Contact list description. """

    class Meta:
        model = Subscription
        fields = ("id", "name", "description", "status")


class ContactSubscriptionsSerializer(NestedSerializer):
    """Used by SubscriptionViewSet for contact to edit their subscriptions."""

    subscriptions = SubscriptionSerializer(many=True)

    class Meta:
        model = models.Contact
        fields = ("id", "name", "email", "subscriptions")
        nested = (("subscriptions", False),)
        read_only_fields = ("name", "email")
