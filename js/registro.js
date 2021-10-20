let registros=[];

/*let registros =[
    {username:"Ana Maria",contrasena:"1234567", preguntaSeg:"1", respuestaSeg:"piña"},
    {username:"Milena Diaz",contrasena:"qwerty", preguntaSeg:"2", respuestaSeg:"verde"},
    {username:"Marcela Luna",contrasena:"asdfg", preguntaSeg:"3", respuestaSeg:"firulais"},
    {username:"Miguel M",contrasena:"zxcvb", preguntaSeg:"4", respuestaSeg:"pasto"}
];*/

function obtenerUsername(arreglo){
    var users = [];
    var letras = /^[0-9]+$/;
    var numeros = /^[a-zA-Z]+$/;
    arreglo.forEach(function(arreglo) {
        if(!(numeros.exec(arreglo["username"])) && !(letras.exec(arreglo["username"]))){
            users.push(arreglo["username"]);
        }
    });
    console.log(users);
    return users;
}

function ordenarArreglo(arreglo){
    arreglo.sort((a,b)=>{
        if (a.username > b.username) {
            return 1;
        }
        if (a.username < b.username) {
            return -1;
        }
        return 0;
    });
    console.log(arreglo);
    return arreglo;
}

function filtrarUsername(arreglo){
    var users = [];
    arreglo.forEach(function(arreglo) {
        users.push(arreglo["username"]);
    });
    var result = users.filter(word => word.length > 10);
    console.log(result);
    return result;
}

function agregarRegistro(){
    var datos = {
        username:document.getElementById("username").value,
        contrasena:document.getElementById("contrasena").value,
        respuesta:document.getElementById("respuestadeseguridad")};
    this.registros.push(datos);
    console.log(registros.length);
}

module.exports.registros = registros;
module.exports.filtrarUsername = filtrarUsername;
module.exports.obtenerUsername = obtenerUsername;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;