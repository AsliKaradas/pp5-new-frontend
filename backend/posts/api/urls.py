from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet
from notification.views import ShowNotification, DeleteNotification

post_router = DefaultRouter()
post_router.register(r'posts', PostViewSet)
post_router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('', ShowNotification, name='show-notification'),
    path('<noti_id>/delete', DeleteNotification, name='delete-notification'),

]