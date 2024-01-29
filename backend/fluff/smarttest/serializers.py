"""
Serializers for SmartTest APIs
"""

from rest_framework import serializers

from core.models import (
    SmartTestAnswer,
    SmartTestResult,
    DogPersonaltyQuestion,
    DogPersonalityResult,
    PrescreeningQuestion,
    PrescreeningAnswer,
    QuestionAnswerMapping,
    PrescreeningResult,
)


class SmartTestAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTestAnswer
        fields = ("id", "position", "answer")


class SmartTestResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTestResult
        fields = ("id", "user", "temperament")


class DogPersonaltyQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogPersonaltyQuestion
        fields = ("id", "question_number", "question_text", "answer_choice")


class DogPersonalityResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogPersonalityResult
        fields = ("id", "name", "temperament")


class QuestionAnswerMappingSerializer(serializers.ModelSerializer):
    answer = serializers.CharField(source="answer.answer_text", read_only=True)

    class Meta:
        model = QuestionAnswerMapping
        fields = ["id", "answer", "points"]


class PrescreeningQuestionSerializer(serializers.ModelSerializer):
    answers = QuestionAnswerMappingSerializer(many=True, read_only=True)

    class Meta:
        model = PrescreeningQuestion
        fields = ["id", "question_text", "answers"]


class PrescreeningResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrescreeningResult
        fields = ["id", "user", "total_points"]
