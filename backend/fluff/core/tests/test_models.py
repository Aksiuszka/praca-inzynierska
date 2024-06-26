"""
Tests for models.
"""
from django.test import TestCase
from django.contrib.auth import get_user_model

class ModelTests(TestCase):
    """Test models."""

    def test_create_user_with_email_successful(self):
        """Test creating a user with an e-mail is successful."""
        email = 'test@example.com'
        password = 'testPa*ss123'
        user = get_user_model().objects.create_user(
            email=email,
            password=password,
            first_name='Test',
            last_name='User',
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))


    def test_new_user_without_email_raises_error(self):
        """Test that creating a user without an email raises a ValueError."""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user('', 'testPa*ss123')

    def test_create_superuser(self):
        """Test creating a superuser."""
        user = get_user_model().objects.create_superuser(
            'test@example.com',
            'testPa*ss123',
            first_name='Super',
            last_name='User',
        )

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
