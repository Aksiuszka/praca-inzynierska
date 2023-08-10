"""
Database models.
"""
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.core.validators import (
    MinValueValidator,
    MaxValueValidator,
    RegexValidator,
    EmailValidator,
    FileExtensionValidator
)
from datetime import datetime

class Province(models.Model):
    name = models.CharField(max_length=255)

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, role=None, **extra_fields):
        if not email:
            raise ValueError('User must have an email address.')
        birth_year = extra_fields.pop('birth_year', None)
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        if birth_year is not None:
            user.birth_year = birth_year

        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, role=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("birth_year", 2000)
        return self.create_user(email, password, **extra_fields)

class Address(models.Model):
    province = models.ForeignKey(Province, on_delete=models.CASCADE)
    city_name = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=10, validators=[
        RegexValidator(
            regex=r'^\d{2}-\d{3}$',  # przykład: 12-345
            message='Enter a valid postal code in the format XX-XXX.',
        )
    ])

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, validators=[EmailValidator()])
    name = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birth_year = models.IntegerField(
        null=True,
        blank=True,
        validators=[
            MinValueValidator(1900),
            MaxValueValidator(datetime.now().year),
        ]
    )
    address = models.OneToOneField(Address, on_delete=models.CASCADE, null=True)
    profile_picture = models.ImageField(upload_to="profile_images", null=True, validators=[FileExtensionValidator(['jpg', 'png', 'gif'])])
    last_login = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    role = models.ForeignKey("Role", on_delete=models.SET_NULL, null=True, blank=True, related_name='user_roles')

    objects = UserManager()

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ["email"]

class Role(models.Model):
    REGULAR_USER = "User"
    VOLUNTEER = "Volunteer"
    ADMINISTRATOR = "Administrator"
    BREEDER = "Breeder"

    ROLE_CHOICES = [
        (REGULAR_USER, "User"),
        (VOLUNTEER, "Volunteer"),
        (ADMINISTRATOR, "Administrator"),
        (BREEDER, "Breeder"),
    ]

    name = models.CharField(max_length=255, choices=ROLE_CHOICES, unique=True)
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name='roles')

    def __str__(self):
        return self.name