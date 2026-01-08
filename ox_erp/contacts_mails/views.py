from django.utils.translation import gettext_lazy as _

from ox.assets import Asset, Assets, ox_assets
from ox.core.views import AppView, ModelViewSet
from ox.apps.mails.views import BaseMailViewSet
from ox.utils.jwt import JWTokenViewMixin

from ox_erp.contacts.models import Contact
from . import apps, models, serializers, tokens


__all__ = ("ContactMailViewSet", "ContactSubscriptionsViewSet")


class SubscriptionAppView(JWTokenViewMixin, AppView):
    template_name = "ox_erp/contacts_mails/subscriptions.html"
    jwtoken_class = tokens.ContactSubscriptionToken
    assets = Assets(
        "@oxylus/contacts-mails",
        includes=[
            Asset("", "subscriptions.js"),
        ],
        dependencies=[ox_assets],
        owner=apps.AppConfig,
    )
    icon = "mdi-email-check"
    extra_context = {"no_nav": True, "title": _("Manage your subscriptions")}


class ContactMailViewSet(BaseMailViewSet):
    queryset = models.ContactMail.objects.all().order_by("-updated")
    serializer_class = serializers.ContactMailSerializer
    perms_map = {
        "send": ["ox_contacts_mails.change_contactmail"],
    }


class ContactSubscriptionsViewSet(JWTokenViewMixin, ModelViewSet):
    """
    Viewset used for contact's subscription edition.

    It uses a JWT to "authenticate" user, with limited access and data view.
    """

    queryset = Contact.objects.all().prefetch_related("subscriptions", "subscriptions__contact_list")
    permission_classes = []
    serializer_class = serializers.ContactSubscriptionsSerializer
    jwtoken_class = tokens.ContactSubscriptionToken

    def get_queryset(self):
        """Filter by jwt or return empty queryset."""
        if self.jwt:
            return super().get_queryset().filter(uuid=self.jwt.contact)
        return self.queryset.none()
