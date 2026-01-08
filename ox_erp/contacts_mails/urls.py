from django.urls import path
from rest_framework.routers import DefaultRouter

from ox.core.views import UserAppView
from . import panels, views


router = DefaultRouter()
router.register("mail", views.ContactMailViewSet)
router.register("subscriptions", views.ContactSubscriptionsViewSet)

api_urls = router.urls

urls = [
    path(
        "",
        UserAppView.as_view(
            default_panel="contactmails",
            panels=panels.panels,
        ),
        name="index",
    ),
    path("subscriptions/<str:jwt>/", views.SubscriptionAppView.as_view(), name="subscriptions"),
]
