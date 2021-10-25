const express = require("express");
const mysql = require("mysql");
const port = 3306;
const app = express();

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'campbio',
    user: 'root',
    password: '1234'
});

conexion.connect(function(error){
    if (error){
        console.log('Error de conexion',error.stack);
        return;
    }
    console.log("Conectado", conexion.threadId);
});

app.get("/Usuarios",(req,res)=>{
    let sql = "SELECT username FROM usuarios";
    conexion.query(sql, function(error, results, fields){
        if (error){
            throw error;
        }
        for(var i in results){
            console.log('Usuario ${results[i].username}')
        }
        res.send("Usuario registrado")
    })
});

//INSERT INTO `Usuarios` (`id`, `username`, `contrasena`, `pregunta`, `respuesta`) VALUES (NULL, 'carmen', 'carmelita', 'fruta', 'morauva');