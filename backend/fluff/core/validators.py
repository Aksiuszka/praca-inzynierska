import re
from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _

class CustomPasswordValidator:
    def __init__(self, min_length=8):
        self.min_length = min_length

    def validate(self, password, user=None):
        if len(password) < self.min_length:
            raise ValidationError(
                _("Password must be at least {} characters long.").format(self.min_length)
            )

        if not any(char.islower() for char in password):
            raise ValidationError(_("Password must contain at least one lowercase letter."))

        if not any(char.isupper() for char in password):
            raise ValidationError(_("Password must contain at least one uppercase letter."))

        if not re.search(r'[!@#$%^&*()-_=+[\]{}|;:,.<>?/]', password):
            raise ValidationError(_("Password must contain at least one special character."))

    def get_help_text(self):
        return _(
            "Your password must contain at least one lowercase letter, "
            "one uppercase letter, one special character, and be at least {} characters long."
        ).format(self.min_length)
