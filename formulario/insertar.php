<?php
    include("conexion.php");

    if (isset($_POST['username'])&& !empty($_POST['username']) &&
        isset($_POST['contrasena'])&& !empty($_POST['contrasena']) && isset($_POST['preguntadeseguridad'])&& !empty($_POST['preguntadeseguridad']) && isset($_POST['respuestadeseguridad'])&& !empty($_POST['respuestadeseguridad'])) {
            
            mysqli_query($conexion,("INSERT INTO usuario(username, contrasena) VALUES('$_POST[username]','$_POST[contrasena]','$_POST[preguntadeseguridad]','$_POST[respuestadeseguridad]')"));
            echo "Datos insertados correctamente";
    }else{
        echo "Error al insertar datos";
}