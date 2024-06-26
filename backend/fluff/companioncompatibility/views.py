from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import (
    SmartTestAnswer,
    SmartTestResult,
    DogPersonaltyQuestion,
    DogPersonalityResult,
)
from .serializers import (
    SmartTestAnswerSerializer,
    SmartTestResultSerializer,
    DogPersonaltyQuestionSerializer,
    DogPersonalityResultSerializer,
    PrescreeningQuestionSerializer,
    PrescreeningResultSerializer,
    PrescreeningQuestion,
    PrescreeningAnswer,
    QuestionAnswerMapping,
    PrescreeningResult,
)

from collections import defaultdict


""" SmartTest dla ludzi"""


class SmartTestAnswerViewSet(viewsets.ModelViewSet):
    queryset = SmartTestAnswer.objects.all().order_by("position")
    serializer_class = SmartTestAnswerSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["get"])
    def get_test(self, request):
        test_data = []

        for position in SmartTestAnswer.objects.values_list(
            "position", flat=True
        ).distinct():
            test_data.append(
                self.get_serializer(
                    SmartTestAnswer.objects.filter(position=position), many=True
                ).data
            )

        return Response(test_data, status=status.HTTP_200_OK)


class SmartTestResultViewSet(viewsets.ModelViewSet):
    queryset = SmartTestResult.objects.all()
    serializer_class = SmartTestResultSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["post"])
    def calculate_personality_result(self, request):
        user_answer = request.data.get("user_answers")

        result_temperament = self.calculate_personality_logic(user_answer)

        user = request.user
        test_result = SmartTestResult.objects.create(
            user=user, temperament=result_temperament
        )

        result_serializer = SmartTestResultSerializer(test_result)
        return Response(
            {"result": result_serializer.data}, status=status.HTTP_201_CREATED
        )

    @action(detail=False, methods=["get"])
    def get_results(self, request):
        user = request.user
        test_results = SmartTestResult.objects.filter(user=user)
        result_serializer = SmartTestResultSerializer(test_results, many=True)
        return Response({"results": result_serializer.data}, status=status.HTTP_200_OK)

    def calculate_personality_logic(self, user_answers):
        temperament_counter = {"C": 0, "S": 0, "F": 0, "M": 0}

        for answer_info in user_answers:
            position = answer_info.get("position")
            chosen_answer_id = answer_info.get("chosen_answer_id")

            answer_instance = SmartTestAnswer.objects.get(id=chosen_answer_id)
            temperament = answer_instance.temperament

            temperament_counter[temperament] += 1

        most_common_temperament = max(temperament_counter, key=temperament_counter.get)
        temperament_full_name = SmartTestAnswer.objects.get(
            temperament=most_common_temperament
        ).name

        return most_common_temperament


""" SmartTest dla psa"""


class DogPersonaltyQuestionViewSet(viewsets.ModelViewSet):
    queryset = DogPersonaltyQuestion.objects.all().order_by("question_number")
    serializer_class = DogPersonaltyQuestionSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["get"])
    def get_dog_test(self, request):
        test_data = []

        for question in DogPersonaltyQuestion.objects.values_list(
            "question", flat=True
        ).distinct():
            test_data.append(
                self.get_serializer(
                    DogPersonaltyQuestion.objects.filter(question_number=question)
                ).data
            )

        return Response(test_data, status=status.HTTP_200_OK)


class DogPersonalityResultViewSet(viewsets.ModelViewSet):
    queryset = DogPersonalityResult.objects.all()
    serializer_class = DogPersonalityResultSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["post"])
    def calculate_dog_result(self, request):
        user_answer = request.data.get("user_answers")

        result_temperament = self.calculate_dog_logic(user_answer)
        name = request.data.get("name")

        test_results = DogPersonalityResult.objects.filter(name=name)

        result_serializer = DogPersonalityResultSerializer(test_results)

        return Response(
            {"result": result_serializer.data}, status=status.HTTP_201_CREATED
        )

    def calculate_dog_logic(self, user_answers):
        domain_scores = {
            "Ekstrawersja/Introwersja": 0,
            "Neurotyzm": 0,
            "Otwartość na Nowe Doświadczenia": 0,
            "Ugodowość": 0,
        }

        for answer in user_answers:
            question_number = answer["question_number"]
            answer_value = answer["answer"]

            answer_to_domain = (
                DogPersonaltyQuestion.objects.filter(answer_choice=answer_value)
                .first()
                .domain
            )

            if answer_value == "Tak":
                domain_scores[answer_to_domain] += 1
            else:
                domain_scores[answer_to_domain] += 0

        temperament = ""

        if (
            domain_scores["Ekstrawersja/Introwersja"] > domain_scores["Neurotyzm"]
            and domain_scores["Otwartość na Nowe Doświadczenia"]
            > domain_scores["Ugodowość"]
        ):
            temperament = "Sangwinik"
        elif (
            domain_scores["Otwartość na Nowe Doświadczenia"]
            > domain_scores["Ekstrawersja"]
            and domain_scores["Ugodowość"] > domain_scores["Neurotyzm"]
        ):
            temperament = "Melancholik"
        elif (
            domain_scores["Ekstrawersja/Introwersja"] > domain_scores["Neurotyzm"]
            and domain_scores["Ugodowość"]
            > domain_scores["Otwartość na Nowe Doświadczenia"]
        ):
            temperament = "Choleryk"
        else:
            temperament = "Flegmatyk"

        return temperament


class PrescreeningViewSet(viewsets.ModelViewSet):
    queryset = PrescreeningQuestion.objects.all()
    serializer_class = PrescreeningQuestionSerializer

    def get_questions(self, request, pk=None):
        if pk is None:
            # Pobierz wszystkie pytania prescreeningowe
            questions = PrescreeningQuestion.objects.all()
            serializer = PrescreeningQuestionSerializer(questions, many=True)
            return Response(serializer.data)

        # Pobierz pytania prescreeningowe dla określonego użytkownika
        user = self.request.user
        user_questions = PrescreeningQuestion.objects.filter(user=user)
        serializer = PrescreeningQuestionSerializer(user_questions, many=True)
        return Response(serializer.data)

    def calculate_result(self, request, pk=None):
        if pk is None:
            # Oblicz wynik prescreeningu dla wszystkich użytkowników
            user_answers = request.data.get("user_answers", [])
            total_points = 0

            for answer_info in user_answers:
                answer_id = answer_info.get("answer_id")
                answer = QuestionAnswerMapping.objects.get(id=answer_id)
                total_points += answer.points

            result_data = {"user": pk, "total_points": total_points}
            serializer = PrescreeningResultSerializer(data=result_data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Oblicz wynik prescreeningu dla określonego użytkownika
        user = self.request.user
        user_answers = request.data.get("user_answers", [])
        total_points = PrescreeningResultCalculator.calculate_result(user_answers)

        result_data = {"user": user.id, "total_points": total_points}
        serializer = PrescreeningResultSerializer(data=result_data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
