from ox.apps.mails.views import BaseMailViewSet
from . import models, serializers


__all__ = ("ContactMailViewSet",)


class ContactMailViewSet(BaseMailViewSet):
    queryset = models.ContactMail.objects.all().order_by("-updated")
    serializer_class = serializers.ContactMailSerializer
    perms_map = {
        "send": ["ox_contacts_mails.change_contactmail"],
    }
