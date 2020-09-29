from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project, Pledge
from .serializers import ProjectSerializer, PledgeSerializer, ProjectDetailSerializer, PledgeDetailSerializer
from django.http import Http404
from rest_framework import status, permissions
from .permissions import IsOwnerOrReadOnly, IsSupporterOrReadOnly
from django.db.models import Sum


permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class ProjectList(APIView):


	def get(self, request):
		projects = Project.objects.all()
		serializer = ProjectSerializer(projects, many=True)
		return Response(serializer.data)
		
	def post(self, request):
		serializer = ProjectSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save(owner = request.user)
			return Response(
				serializer.data,
				status=status.HTTP_201_CREATED
			)
			return Response(
				serializer.errors,
				status=status.HTTP_400_BAD_REQUEST
			)
	
	def delete(self, request, pk):
		project = self.get_object(pk)
		project.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)





class ProjectDetail(APIView):
	
	permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

	def get_object(self, pk):
		try:
			project = Project.objects.get(pk=pk)
			self.check_object_permissions(self.request, project)
			return project
		except Project.DoesNotExist:
			raise Http404

	def delete(self, request, pk):
		project = self.get_object(pk)
		project.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
		
	def get(self, request, pk):
		project = self.get_object(pk)
		serializer = ProjectDetailSerializer(project)
		return Response(serializer.data)

	def put(self, request, pk):
		project = self.get_object(pk)
		data = request.data
		serializer = ProjectDetailSerializer(
			instance=project,
			data=data,
			partial=True
		)
		if serializer.is_valid():
			serializer.save()
			return Response()
		return Response ()
		# add this return error line
		# 	return Response(serializer.data, status=status.HTTP_201_CREATED)
		# return Response (serializer.errors, status=status.HTTP_400_BAD_REQUEST)



		
class PledgeList(APIView):
	
	def get(self, request):
		pledges = Pledge.objects.all()
		serializer = PledgeSerializer(pledges, many=True)
		return Response(serializer.data)
		
	def post(self, request):
		serializer = PledgeSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(
				serializer.data,
				status=status.HTTP_201_CREATED
			)
		return Response(
			serializer.errors,
			status=status.HTTP_400_BAD_REQUEST
		)


class PledgeDetailList(APIView):
	permission_classes = [
		permissions.IsAuthenticatedOrReadOnly,
		IsSupporterOrReadOnly
	]
	def get_object(self, pk):
		try:
			pledge = Pledge.objects.get(pk=pk)
			self.check_object_permissions(self.request, pledge)
			return pledge
		except Pledge.DoesNotExist:
			raise Http404
		
	def get(self, request, pk):
		pledge = self.get_object(pk)
		serializer = PledgeDetailSerializer(pledge)
		return Response(serializer.data)

	def put(self, request, pk):
		pledge = self.get_object(pk)
		data = request.data
		serializer = PledgeDetailSerializer(
			instance=pledge, 
			data=data, 
			partial=True
		)
		if serializer.is_valid():
			serializer.save()
		return Response(serializer.data)
	


class PledgeSupporterList(APIView):
	def get(self, request, pk):
		pledges = Pledge.objects.filter(supporter_id=pk)
		sum_pledges = pledges.aggregate(Sum('amount'))['amount__sum']
		serializer = PledgeDetailSerializer(pledges, many=True)
		new_serializer = dict()
		new_serializer['pledges'] = serializer.data
		new_serializer['sum'] = sum_pledges
		return Response(new_serializer)


class ProjectCategory(APIView):
	def get(self, request, category):
		projects = Project.objects.filter(category=category)
		print(Project.objects.all())
		serializer = ProjectSerializer(projects, many=True)
		print(projects)
		return Response(serializer.data)
