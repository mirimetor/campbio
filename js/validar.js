function validar() {
    var username, contrasena, preguntadeseguridad, respuestadeseguridad, expresion1, expresion2, expresion3;
    username = document.getElementById("username").value;
    contrasena = document.getElementById("contrasena").value;
    preguntadeseguridad = document.getElementById("preguntadeseguridad").value;
    respuestadeseguridad = document.getElementById("respuestadeseguridad").value;
    expresion1 = /^[a-zA-Z0-9\-].{1,30}$/;
    expresion2 = /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/;
    expresion3 = /[a-zA-Z0-9\-]/;


    if (username === "" || username === null || username.length > 30 || (!expresion1.test (username))) {
        alert("Usuario obligatorio. Máximo 30 caracteres alfanuméricos.");
        return false;
    }
else if (contrasena === "" || (!expresion2.test (contrasena))){
        alert("Contraseña Obligatoria. Mínimo 8 caracteres, una letra mayúscula y una minúscula");
        return false;
    }
else if (preguntadeseguridad === "" ) {
    alert("Debe escoger una Pregunta de Seguridad.");
    return false;
    }
    
else if (respuestadeseguridad === "" || respuestadeseguridad.length > 30 || (!expresion3.test (respuestadeseguridad))) {
    alert ("Respuesta de Seguridad Obligatoria. Máximo 30 caracteres alfanuméricos.");
    return false;
}


}