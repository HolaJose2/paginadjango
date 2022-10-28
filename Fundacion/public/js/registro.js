ocument.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registro_form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();


  let nombres = document.getElementById("nombres").value;
  if (nombres.length == 0 || nombres.value === null || nombres.value === '') {
    alert("No has ingresado tu nombre");
    return;
  }
  let apellidos = document.getElementById("apellidos").value;
  if (apellidos.length == 0 || apellidos.value === null || apellidos.value === '') {
    alert("No has ingresado tu apellido");
    return;
  }
  let correo_electronico = document.getElementById("email").value;
  if (correo_electronico.length == 0 || correo_electronico.value === null || correo_electronico.value === '') {
    alert("No has ingresado tu correo electrónico");
    return;
  }

  let direccion = document.getElementById("direccion").value;
  if (direccion.length == 0 || direccion.value === null || direccion.value === '') {
    alert("No has ingresado la direcion");
    return;
  }

  let celular = document.getElementById("celular").value;
  if (celular.length == 0 || celular.value === null || celular.value === '') {
    alert("No has ingresado numero de celular");
    return;
  }


  let contraseña1 = document.getElementById("contraseña1").value;
  if (contraseña1.length == 0 || contraseña1.value === null || contraseña1.value === '') {
    alert("No has ingresado una contraseña");
    return;
  }
  let contraseña2 = document.getElementById("contraseña2").value;
  if (contraseña2.length == 0 || contraseña2.length === null || contraseña2.length === '') {
    alert("No has confirmado la contraseña");
    return;
  }
  if (contraseña1 != contraseña2) {
    alert("Las contraseñas no coinciden");
    return;
  }
  if (contraseña1.length < 8 || contraseña1.length > 16) {
    alert("La contraseña debe tener mas de 8 carateres y menos de 16")
    return;
  }


  this.submit();
}


function SoloLetras(e) {
  key = e.keycode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnñoprstuvwxyzáéíóú";

  /*8=backspace, 46=supr, 37=flecha izquierda,13=enter,39=flecha derecha*/
  especiales = [8, 13, 39, 46, 13];

  tecla_especial = false;
  for (let i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    alert("Ingresa solamente letras en este campo");
    return false;
  }

  this.submit();

  // Obtener la tecla pulsada  
let evento = elEvento || window.event;
let codigoCaracter = evento.charCode || evento.keyCode;
let caracter = String.fromCharCode(codigoCaracter);
// Comprobar si la tecla pulsada es alguna de las teclas especiales 
// (teclas de borrado y flechas horizontales) 
let tecla_especial = false;
for (let i in teclas_especiales) {
  if (codigoCaracter == teclas_especiales[i]) {
    tecla_especial = true;
    break;
  }
}
if (permitidos.indexOf(caracter) == -1) {
  if (tecla_especial == false) {
    alert('Caracter No valido para este campo, Por favor rectifique e intente nuevamente');
  }
}

  this.submit();
}



