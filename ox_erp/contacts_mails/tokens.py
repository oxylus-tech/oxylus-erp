from uuid import UUID
from ox.utils.jwt import JWToken


class ContactSubscriptionToken(JWToken):
    """Token sent to contacts to edit their subscriptions."""

    contact: str | UUID
