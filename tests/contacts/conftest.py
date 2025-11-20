import pytest

from ox_erp.contacts import models


@pytest.fixture
def organisation(person):
    obj = models.Organisation.objects.create(name="Organisation 1")
    person.organisations.add(obj)
    return obj
