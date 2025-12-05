from django.urls import path
from rest_framework.routers import DefaultRouter

from ox.core.views import UserAppView
from . import panels, views


router = DefaultRouter()
router.register("contactmail", views.ContactMailViewSet)

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
]
