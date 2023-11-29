from rest_framework import (
    viewsets,
    status
)
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import (
    SmartTestAnswer,
    SmartTestResult,
    DogPersonaltyQuestion,
    DogPersonalityResult
)
from .serializers import (
    SmartTestAnswerSerializer,
    SmartTestResultSerializer,
    DogPersonaltyQuestionSerializer,
    DogPersonalityResultSerializer
)

from collections import defaultdict


''' SmartTest dla ludzi'''

class SmartTestAnswerViewSet(viewsets.ModelViewSet):
    queryset = SmartTestAnswer.objects.all().order_by('position')
    serializer_class = SmartTestAnswerSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]


    @action(detail=False, methods=['get'])
    def get_test(self, request):
        test_data = []

        for position in SmartTestAnswer.objects.values_list('position', flat=True).distinct():
            test_data.append(
                self.get_serializer(
                    SmartTestAnswer.objects.filter(position=position),
                    many=True
                ).data
            )

        return Response(test_data, status=status.HTTP_200_OK)


class SmartTestResultViewSet(viewsets.ModelViewSet):
    queryset = SmartTestResult.objects.all()
    serializer_class = SmartTestResultSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['post'])
    def calculate_personality_result(self, request):
        user_answer = request.data.get('user_answers')

        result_temperament = self.calculate_personality_logic(user_answer)

        user = request.user
        test_result = SmartTestResult.objects.create(user=user, temperament=result_temperament)

        result_serializer = SmartTestResultSerializer(test_result)
        return Response({'result': result_serializer.data}, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def get_results(self, request):
        user = request.user
        test_results = SmartTestResult.objects.filter(user=user)
        result_serializer = SmartTestResultSerializer(test_results, many=True)
        return Response({'results': result_serializer.data}, status=status.HTTP_200_OK)

    def calculate_personality_logic(self, user_answers):

        temperament_counter = {'C': 0, 'S': 0, 'F': 0, 'M': 0}

        for answer_info in user_answers:
            position = answer_info.get('position')
            chosen_answer_id = answer_info.get('chosen_answer_id')

            answer_instance = SmartTestAnswer.objects.get(id=chosen_answer_id)
            temperament = answer_instance.temperament

            temperament_counter[temperament] += 1

        most_common_temperament = max(temperament_counter, key=temperament_counter.get)
        temperament_full_name = SmartTestAnswer.objects.get(temperament=most_common_temperament).name

        return most_common_temperament


''' SmartTest dla psa'''

class DogPersonaltyQuestionViewSet(viewsets.ModelViewSet):
    queryset = DogPersonaltyQuestion.objects.all().order_by('question_number')
    serializer_class = DogPersonaltyQuestionSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def get_dog_test(self, request):
        test_data = []

        for question in DogPersonaltyQuestion.objects.values_list('question', flat=True).distinct():
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

    @action(detail=False, methods=['post'])
    def calculate_dog_result(self, request):
        user_answer = request.data.get('user_answers')

        result_temperament = self.calculate_dog_logic(user_answer)
        name = request.name
        test_results = DogPersonalityResult.objects.filter(name=name)
        result_serializer = SmartTestResultSerializer(test_results,  many=True)

    def calculate_dog_logic(self, user_answers):

        return

