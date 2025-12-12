from ox.core.views import ModelViewSet
from ox.apps.mails.views import BaseMailViewSet
from ox.utils.jwt import JWTokenViewMixin

from ox_erp.contacts.models import Subscription
from . import models, serializers, tokens


__all__ = ("ContactMailViewSet", "ContactSubscriptionViewSet")


class ContactMailViewSet(BaseMailViewSet):
    queryset = models.ContactMail.objects.all().order_by("-updated")
    serializer_class = serializers.ContactMailSerializer
    perms_map = {
        "send": ["ox_contacts_mails.change_contactmail"],
    }


class ContactSubscriptionViewSet(JWTokenViewMixin, ModelViewSet):
    """
    Viewset used for contact's subscription edition.

    It uses a JWT to "authenticate" user, with limited access and data view.
    """

    queryset = Subscription.objects.all()
    permission_classes = []
    serializer_class = serializers.ContactSubscription
    jwtoken_class = tokens.ContactSubscriptionToken

    def get_queryset(self):
        """Filter by jwt or return empty queryset."""
        if self.jwt:
            return super().get_queryset().filter(contact__uuid=self.jwt.contact)
        return self.queryset.none()
