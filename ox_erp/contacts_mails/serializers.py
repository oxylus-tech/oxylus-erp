from ox.core.serializers import RelatedField
from ox.apps.mails.serializers import BaseMailSerializer

from ox_erp.contacts.models import Contact, ContactList
from . import models


__all__ = ("ContactMailSerializer",)


class ContactMailSerializer(BaseMailSerializer):
    recipients = RelatedField(queryset=Contact.objects.all(), many=True)
    recipient_lists = RelatedField(queryset=ContactList.objects.all(), many=True)

    class Meta:
        model = models.ContactMail
        fields = "__all__"
