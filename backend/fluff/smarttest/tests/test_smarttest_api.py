# # tests.py

# from django.contrib.auth import get_user_model
# from django.test import TestCase
# from rest_framework.authtoken.models import Token
# from rest_framework.test import APIClient
# from rest_framework import status
# from django.urls import reverse
# from core.models import SmartTestAnswer, SmartTestResult

# class SmartTestAnswerViewSetTests(TestCase):
#     def setUp(self):
#         self.user = get_user_model().objects.create_user(
#             email='testuser@example.com',
#             password='testpassword')
#         self.token = Token.objects.create(user=self.user)
#         self.client = APIClient()
#         self.client.credentials(HTTP_AUTHORIZATION=f'Token {self.token.key}')

#         SmartTestAnswer.objects.create(answer='Answer 1', position=1, temperament='C')
#         SmartTestAnswer.objects.create(answer='Answer 2', position=1, temperament='S')
#         SmartTestAnswer.objects.create(answer='Answer 3', position=1, temperament='F')
#         SmartTestAnswer.objects.create(answer='Answer 4', position=1, temperament='M')
#         SmartTestAnswer.objects.create(answer='Answer 5', position=2, temperament='C')
#         SmartTestAnswer.objects.create(answer='Answer 6', position=2, temperament='S')
#         SmartTestAnswer.objects.create(answer='Answer 7', position=2, temperament='F')
#         SmartTestAnswer.objects.create(answer='Answer 8', position=2, temperament='M')
#         SmartTestAnswer.objects.create(answer='Answer 9', position=3, temperament='C')
#         SmartTestAnswer.objects.create(answer='Answer 10', position=3, temperament='S')
#         SmartTestAnswer.objects.create(answer='Answer 11', position=3, temperament='F')
#         SmartTestAnswer.objects.create(answer='Answer 12', position=3, temperament='M')
#         SmartTestAnswer.objects.create(answer='Answer 13', position=4, temperament='C')
#         SmartTestAnswer.objects.create(answer='Answer 14', position=4, temperament='S')
#         SmartTestAnswer.objects.create(answer='Answer 15', position=4, temperament='F')


#     def test_get_test(self):
#         url = reverse('smarttest:smarttestanswer-get_test')
#         response = self.client.get(url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)


# class SmartTestResultViewSetTests(TestCase):
#     def setUp(self):
#         self.user = get_user_model().objects.create_user(
#             email='testuser@example.com',
#             password='testpassword')
#         self.token = Token.objects.create(user=self.user)
#         self.client = APIClient()
#         self.client.credentials(HTTP_AUTHORIZATION=f'Token {self.token.key}')

#         # Dodaj testowe wyniki
#         SmartTestResult.objects.create(user=self.user, temperament='C')
#         SmartTestResult.objects.create(user=self.user, temperament='S')


#     def test_calculate_personality_result(self):
#         url = reverse('smarttest:smarttestresult-calculate_personality_result')

#         test_questions = [
#             SmartTestAnswer.objects.create(answer=f'Answer {i}', position=i, temperament='C')
#             for i in range(1, 3)
#         ]

#         user_answers = [
#             {'question_position': question.position, 'chosen_answer_id': question.id}
#             for question in test_questions
#         ]

#         data = {'user_answers': user_answers}
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)


#     def test_get_results(self):
#         url = reverse('smarttest:smarttestresult-get_results')
#         response = self.client.get(url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

