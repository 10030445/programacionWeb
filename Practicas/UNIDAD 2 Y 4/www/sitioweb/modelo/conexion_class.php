<?php
class conexion
{
	public function conectar()
	{
		$con = mysql_connect('localhost','root','freemindedu') or die ('No se pudo conectar');
		mysql_select_db('pagweb')or die('No pude seleccionar BD');
		return $con;
	}

}