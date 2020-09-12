from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import CustomUserSerializer


class CustomUserList(APIView):
	
	def get(self, request):
		users = CustomUser.objects.all()
		serializer = CustomUserSerializer(users, many=True)
		return Response(serializer.data)
	def post(self, request):
		serializer = CustomUserSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors)
		
class CustomUserDetail(APIView):
    #whenever you need to get a specific instance or primary key from the database. here.
	def get_object(self, pk):
		try:
			return CustomUser.objects.get(pk=pk)
		except CustomUser.DoesNotExist:
			raise Http404
	
    #then you need to had it to the serializer.
	def get(self, request, pk):
		user = self.get_object(pk)
		serializer = CustomUserSerializer(user)
		return Response(serializer.data)
