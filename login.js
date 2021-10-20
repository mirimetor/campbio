let registros=[];

/*let registros =[
    {username:"Ana Maria",contrasena:"1234567", preguntaSeg:"1", respuestaSeg:"piña"},
    {username:"Milena Diaz",contrasena:"qwerty", preguntaSeg:"2", respuestaSeg:"verde"},
    {username:"Marcela Luna",contrasena:"asdfg", preguntaSeg:"3", respuestaSeg:"firulais"},
    {username:"Miguel M",contrasena:"zxcvb", preguntaSeg:"4", respuestaSeg:"pasto"}
];*/

function agregarRegistro(){
    var datos = {
        username:document.getElementById("username").value,
        contrasena:document.getElementById("contrasena").value
        };
    this.registros.push(datos);
    //console.log(registros.length);
}

function login(){
    if (registros.length <=0) {
        registros.push({username:"Miguel M",contrasena:"zxcvb"})
        return true;
    }else{
        let usuario = document.getElementById("username").value;
        let pass = document.getElementById("contrasena").value;
        let captcha = 9000;
        const captchaValidacion = validarCAPTCHA(captcha);
        let existe = registros.filter((existe) => { existe.username == usuario && existe.contrasena == pass });
        let registroValidar = existe.username = existe.username == usuario && existe.contrasena == pass ? true : false;
        //console.log(existe);
        return captchaValidacion && registroValidar ? true :false;
    }
}

function validarCAPTCHA(captcha){

    console.log(captcha);
    if(captcha != 9000){
        console.log("falso");
        return false;
    }else{
        console.log("verdadero");
        return true;
    }
    
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;