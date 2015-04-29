<?php
session_start()
echo 'Hello World';
echo "<HMTL>";
	echo "<HEAD><title>	Mi primer página PHP</title></HEAD>";
	echo "<BODY>";		
	echo "<FORM name='frmdatos' method='post' action='hola.php?name=Luis&apepat=Silva' target='_self'>";
	echo "Usuario<input type='text' name='txtnombre' size='30'><br>";
    echo "Password<input type='password' name='txtpass' size='30'><br>";
	echo "<input type='submit' value='Enviar'>";
	echo "<a href='hola.php?name=Luis&apepat=Silva'>Hola</a>";
	echo "</FORM>";

	echo "</BODY";
echo "</HTML>";	

  echo  $_SESSION ['nomusr'] = "Luis:)";
  echo $_SESSION ['apepat'] = "Silva";
  echo $_SESSION ['correo'] = "jlzsisco@gmail.colm";

?>
