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
    SmartTestResult
)
from .serializers import (
    SmartTestAnswerSerializer,
    SmartTestResultSerializer
)

import collections


''' SmartTest dla ludzi'''

class SmartTestAnswerViewSet(viewsets.ModelViewSet):
    queryset = SmartTestAnswer.objects.all().order_by('position')
    serializer_class = SmartTestAnswerSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def get_test(self, request):
        test_position = SmartTestAnswer.objects.values_list('position', flat=True).distinct()
        test_data = []

        for position in test_position:
            answers_for_position = SmartTestAnswer.objects.filter(position=position)
            answers_data = []

            for answer in answers_for_position:
                answers_data.append({
                'id': answer.id,
                'answer_text': answer.answer
            })

            test_data.append({
                'question_position': position,
                'answers': answers_data,
                'chosen_answer_id': None
            })

        return Response(test_data)

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

        temperament_counter = collections.Counter(answer.get('temperament') for answer in user_answers)

        moost_common_temperament = max(temperament_counter,  key=temperament_counter.get)
        return moost_common_temperament

