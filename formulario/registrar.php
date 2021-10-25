<?php

include 'conexion.php';
    $username = $_POST['username'];
    $contrasena = $_POST['contrasena'];
    $preguntadeseguridad = $_POST['preguntadeseguridad'];
    $respuestadeseguridad = $_POST['respuestadeseguridad'];



$insertar = "INSER INTO usuario values ('$username', '$contrasena','$preguntadeseguridad', '$respuestadeseguridad')";

//ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);

if(!$resultado){
    echo 'Error al registrarse';
}
else{
    echo 'Usuario registrado correctamente';
}

//Cerrar conexión
mysqli_close($conexion);
