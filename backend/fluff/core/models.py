"""
Database models.
"""
from django.conf import settings
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
    FileExtensionValidator,
)
from django.utils import timezone

from datetime import datetime


class Province(models.Model):
    name = models.CharField(max_length=255)


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, role=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email address.")
        birth_year = extra_fields.pop("birth_year", None)
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
    postal_code = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(
                regex=r"^\d{2}-\d{3}$",
                message="Enter a valid postal code in the format XX-XXX.",
            )
        ],
    )


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=255, unique=True, validators=[EmailValidator()]
    )
    name = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birth_year = models.IntegerField(
        null=True,
        blank=True,
        validators=[
            MinValueValidator(1900),
            MaxValueValidator(datetime.now().year),
        ],
    )
    address = models.OneToOneField(Address, on_delete=models.CASCADE, null=True)
    profile_picture = models.ImageField(
        upload_to="profile_images",
        null=True,
        validators=[FileExtensionValidator(["jpg", "png", "gif"])],
    )
    last_login = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    role = models.ForeignKey(
        "Role",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="user_roles",
    )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]


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
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="roles")

    def __str__(self):
        return self.name


class SmartTestAnswer(models.Model):
    """SmartTest Answer objects."""

    TEMPERAMENT_CHOICES = [
        ("C", "Choleryk"),
        ("S", "Sangwinik"),
        ("F", "Flegmatyk"),
        ("M", "Melancholik"),
    ]

    answer = models.CharField(max_length=100)
    position = models.IntegerField()
    temperament = models.CharField(max_length=1, choices=TEMPERAMENT_CHOICES)

    def __str__(self):
        return self.answer


class SmartTestResult(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    temperament = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.temperament


class DogPersonaltyQuestion(models.Model):
    EXTRAVERSION = "Ekstrawersja/Introwersja"
    NEUROTICISM = "Neurotyzm"
    OPENNESS = "Otwartość na nowe doświadczenia"
    AGREEABLENESS = "Ugodowość"

    DOMAIN_CHOICES = [
        (EXTRAVERSION, "Ekstrawersja/Introwersja"),
        (NEUROTICISM, "Neurotyzm"),
        (OPENNESS, "Otwartość na nowe doświadczenia"),
        (AGREEABLENESS, "Ugodowość"),
    ]
    question_number = models.PositiveIntegerField(unique=True)
    question_text = models.CharField(max_length=255)
    domain = models.CharField(max_length=255, choices=DOMAIN_CHOICES)
    answer_choice = models.CharField(
        max_length=1, choices=[("1", "Tak"), ("0", "Nie")], default="0"
    )

    def __str__(self):
        return self.question_text


class DogPersonalityResult(models.Model):
    name = models.CharField(max_length=255)
    temperament = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.temperament


class PrescreeningQuestion(models.Model):
    question_text = models.CharField(max_length=255)

    def __str__(self):
        return self.question_text


class PrescreeningAnswer(models.Model):
    answer_text = models.CharField(max_length=255)

    def __str__(self):
        return self.answer_text


class QuestionAnswerMapping(models.Model):
    question = models.ForeignKey(PrescreeningQuestion, on_delete=models.CASCADE)
    answer = models.ForeignKey(PrescreeningAnswer, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.question.question_text} - {self.answer.answer_text} ({self.points} points)"


class PrescreeningResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_points = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} - Total Points: {self.total_points}"
