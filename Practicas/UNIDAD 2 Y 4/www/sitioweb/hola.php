
<?php
session_start();
require('./modelo/conexion_class.php');
//include('./modelo/conexion_class.php');


$objcon = new conexion();
$con = $objcon->conectar();

$usr = $_POST['txtnombre'];
$usr = $_POST['txtpass'];

$qry = "SELEST * FROM usuarios WHERE usr='".$usr."' AND pwdusr = '".md5($pwd). ."'";
$con_usr = mysql_query($qry,$con);
$num_res = mysql_num_rows($con_usr);
if( $num_res == 1)
{

		$_SESSION['nomusr'] =  "Rubensin :(";
		header('Location:./carpeta/pagina3.php');
}
?>