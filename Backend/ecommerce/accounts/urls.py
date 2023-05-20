from django.urls import path
from .views import *

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('users/', UserListView.as_view(), name='user-list'),
]

# from django.urls import path
# from .views import *

# urlpatterns = [
#     path('register/', RegisterAPI.as_view(), name='register')
# ]
