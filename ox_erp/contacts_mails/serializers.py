from ox.core.serializers import ModelSerializer, RelatedField

from ox_erp.contacts.models import Contact, ContactList
from . import models


__all__ = ("ContactMailSerializer",)


class ContactMailSerializer(ModelSerializer):
    recipients = RelatedField(queryset=Contact.objects.all())
    recipient_lists = RelatedField(queryset=ContactList.objects.all())

    class Meta:
        model = models.ContactMail
