"""
Serializers for SmartTest APIs
"""

from rest_framework import serializers

from core.models import (
    SmartTestAnswer,
    SmartTestResult
)

class SmartTestAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTestAnswer
        exclude = ('temperament',)

class SmartTestResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTestResult
        exclude = ('user',)

