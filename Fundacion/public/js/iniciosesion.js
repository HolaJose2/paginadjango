document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login_form").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
        let correo = document.getElementById("Email").value;
        if(correo.length == 0 || correo.value === null || correo.value === ''){
            alert ("No ha ingresado el correo electronico con el que se registro");
            return;
        }
        let contraseña = document.getElementById("Password").value;
        if(contraseña.length == 0 || contraseña.value === null || contraseña.value === ''){
            alert("No has ingresado la contraseña con la que se registro");
            return;
        }
    this.submit();

}