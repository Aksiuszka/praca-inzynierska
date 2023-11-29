"""
Serializers for SmartTest APIs
"""

from rest_framework import serializers

from core.models import (
    SmartTestAnswer,
    SmartTestResult,
    DogPersonaltyQuestion,
    DogPersonalityResult,
)

class SmartTestAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTestAnswer
        fields = ('id', 'position', 'answer')

class SmartTestResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTestResult
        fields = ('id', 'user', 'temperament')


class DogPersonaltyQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogPersonaltyQuestion
        fields = ('id', 'question_number', 'question_text', 'answer_choice')

class DogPersonalityResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogPersonalityResult
        fields = ('id', 'name', 'temperament')
