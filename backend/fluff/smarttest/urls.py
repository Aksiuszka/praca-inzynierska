
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from smarttest import views

router = DefaultRouter()
router.register('smart-test-answers', views.SmartTestAnswerViewSet)
router.register('smart-test-results', views.SmartTestResultViewSet)

app_name = 'smarttest'

urlpatterns = [
    path('', include(router.urls)),
]
