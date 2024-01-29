from django.urls import path, include
from rest_framework.routers import DefaultRouter
from smarttest import views

router = DefaultRouter()
router.register("smart-test-answers", views.SmartTestAnswerViewSet)
router.register("smart-test-results", views.SmartTestResultViewSet)
router.register("smart-test-dog", views.DogPersonaltyQuestionViewSet)
router.register("smart-test-dog-results", views.DogPersonalityResultViewSet)
router.register("prescreening-questions", views.PrescreeningViewSet)


app_name = "smarttest"

urlpatterns = [
    path("", include(router.urls)),
]
