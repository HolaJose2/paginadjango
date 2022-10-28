import http
from pydoc import render_doc
from django.http import HttpResponse
from django.template import Template, Context
from django.db import connection
from django.shortcuts import render,redirect
from django.contrib import messages
from Fundacion.models import Usuario

def index(request):
    return HttpResponse('Hola mundo!')

def RegistrarUsuario(request):
    if request.method == 'POST':
        if request.POST.get('nombre') and request.POST.get('apellido') and request.POST.get('direccion') and request.POST.get('celular') and request.POST.get('email')and request.POST.get('contraseña'):
            usuario = Usuario()
            usuario.nombre_usuario = request.POST.get('nombre')
            usuario.apellido_usuario = request.POST.get('apellido')
            usuario.direccion_usuario = request.POST.get('direccion')
            usuario.celular_usuario = request.POST.get('celular')
            usuario.correo_usuario = request.POST.get('email')
            usuario.contraseña_usuario = request.POST.get('contraseña')
            insertar = connection.cursor()
            insertar.execute("call registrarusuario('"+usuario.nombre_usuario+"','"+usuario.apellido_usuario+"','"+usuario.direccion_usuario+"','"+usuario.celular_usuario+"','"+usuario.correo_usuario+"','"+usuario.contraseña_usuario+"')")
            messages.success(request,'El usuario ->'+usuario.nombre_usuario+' se guardó con éxito.')
            return render(request, 'usuario/registro.html')
    else:
        return render(request, 'usuario/registro.html')

        
