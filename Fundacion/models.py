from django.db import connections 
from django.db import models

class Usuario(models.Model):
    nombre_usuario = models.CharField(max_length=50)
    apellido_usuario = models.CharField(max_length=50)
    direccion_usuario = models.CharField(max_length=50)
    celular_usuario = models.CharField(max_length=15)
    correo_usuario = models.CharField(max_length=50)
    contraseña_usuario = models.CharField(max_length=15)

    class Meta:
        db_table = "usuario"