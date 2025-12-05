from django.db.models import Count
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

from ox.core.views import ModelViewSet
from ox.apps.mails.views import BaseMailViewSet
from . import models, serializers


__all__ = ("ContactMailViewSet",)


class ContactMailViewSet(BaseMailViewSet):
    queryset = models.ContactMail.objects.all().order_by("-updated")
    serializer_class = serializers.ContactMailSerializer
    perms_map = {
        "send": ["ox_contacts_mails.change_contactmail"],
    }
