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

class SmartTestAnswerviewSet(viewsets.ModelViewSet):
    queryset = SmartTestAnswer.objects.all()
    serializer_class = SmartTestAnswerSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class SmartTestResultViewSet(viewsets.ModelViewSet):
    queryset = SmartTestResult.objects.all()
    serializer_class = SmartTestResultSerializer
    authentication_classes = [TokenAuthentication]
    authentication_classes = [IsAuthenticated]

    @action(detail=False, methods=['post'])
    def calculate_personality_result(self, request):
        user_answer = request.data.get('user_answer')

        result_temperament = self.calculate_personality_logic(user_answer)

        user = request.user
        test_result = SmartTestResult.objects.create(user=user, temperament=result_temperament)

        result_serializer = SmartTestAnswerSerializer(test_result)
        return Response({'result': result_serializer.data}, status=status.HTTP_201_CREATED)

    def calculate_personality_logic(self, user_answer):
        temperament_counts = {'C': 0, 'S': 0, 'F': 0, 'M': 0}
        for answer in user_answer:
            temperamnet = answer.get('temperament')
            temperament_counts[temperamnet] += 1

        moost_common_temperament = max(temperament_counts,  key=temperament_counts.get)
        return moost_common_temperament


