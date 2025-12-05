from django.contrib import admin

from . import models


@admin.register(models.ContactMail)
class ContactMailAdmin(admin.ModelAdmin):
    pass
