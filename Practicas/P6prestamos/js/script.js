$(document).ready(function(){

var monto = parseInt($("#monto").val());
var meses = parseInt($("#meses").val());



$('#calcula').click(function(){
  

  		

		if (meses <= 3) 
		{
			var interes = parseInt($("#monto").val()) * 0.01;
			alert('INTERES DEL 1% '+ interes);
		};

		if (meses <= 7) 
		{
			var interes = parseInt($("#monto").val()) * 0.02;
			alert('INTERES DEL 2% '+ interes);
		};

		if (meses >= 8) 
		{
			var interes = parseInt($("#monto").val()) * 0.03;
			alert('INTERES DEL 3%  '+ interes);
		};

		var totalp= interes + monto;
		var pagom= interes / meses;

		intereses.value = interes;
		monto2.value = monto;
		total.value = totalp;
		pago.value = pagom;



});



});




   
    
