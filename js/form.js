function checkUsername(){
    var nombre= document.getElementById("username").value;
    const caracteres = /^[a-zA-Z0-9\-]{1,30}$/;
    if(nombre==="" || nombre===null || nombre.length===0 || !(caracteres.test(nombre))){
        console.log("Usuario incorrecto");
        return false;
    } else {
        console.log("Usuario validado");
        return true;
    }
}

function checkContrasena(){
    var nombre= document.getElementById("contrasena").value;
    const caracteres = /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/;
    if(nombre==="" || nombre===null || !(caracteres.test(nombre))){
        console.log("Error");
        return false;
    } else {
        console.log("Validado");
        return true;
    }
}

function checkRespuestaSeg(){
    var nombre= document.getElementById("respuestadeseguridad");
    const caracteres = /[a-zA-Z0-9\-]/;
    if(nombre==="" || nombre===null || !(caracteres.test(nombre))){
        console.log("Error");
        alert("No hay respuesta");
        return false;
    } else {
        console.log("Validado");
        return true;
    }
}

//module.exports={checkUsername,checkContrasena,checkRespuestaSeg};