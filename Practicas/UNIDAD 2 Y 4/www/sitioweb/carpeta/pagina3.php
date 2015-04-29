<?php

session_start();
if(isset($_SESSION['autenticado']))
{
	echo "Bienvenido: ".$_SESSION['nomusr'];
}
else

//para redireccionar a otro archivo o direccion
	header('Location: ../index.php')
?>