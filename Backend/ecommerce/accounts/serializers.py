from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        
        return user
# from rest_framework import serializers
# from django.contrib.auth.models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'

# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('first_name', 'last_name', 'username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only':True}}
    
#     def create(self, validated_data):
#         user = User.objects.create_user(
#             validated_data['first_name'],
#             validated_data['last_name'],
#             validated_data['username'],
#             validated_data['email'],
#             validated_data['password']
#             )
        
#         return user

