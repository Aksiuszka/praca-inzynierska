
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from smarttest import views

router = DefaultRouter()
router.register('smart-test-answers', views.SmartTestAnswerViewSet)
router.register('smart-test-results', views.SmartTestResultViewSet)
router.register('smart-test-dog', views.DogPersonaltyQuestionViewSet)

app_name = 'smarttest'

urlpatterns = [
    path('', include(router.urls)),
]
