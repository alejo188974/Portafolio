<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$destino = "alex_sam@hotmail.com.ar";

$contenido = "Nombre: $nombre \nEmail: $email \nMensaje: $mensaje";

mail($destino,"Nuevo mensaje",$contenido);

header("Location: gracias.html");

?>