
<?php
session_start();
require('./modelo/conexion_class.php');
//include('./modelo/conexion_class.php');


$objcon = new conexion();
$con = $objcon->conectar();

$usr = $_POST['txtnombre'];
$pwd = $_POST['txtpass'];

$qry = "SELECT * FROM usuarios WHERE usr='".$usr."' AND pwdusr = '".md5($pwd)."'";
$con_usr = mysql_query($qry,$con);
$num_res = mysql_num_rows($con_usr);
if( $num_res == 1)
{
		
		$dat_usr = mysql_fetch_array($con_usr); //arreglo asociativo
		$_SESSION['nomusr'] =  $dat_usr['nomusr'];
		header('Location:./carpeta/pagina3.php');
}

		else

{
		header('Location:index.php');
}

?>