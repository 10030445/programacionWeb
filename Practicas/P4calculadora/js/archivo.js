	
    	function calcula(operacion){
    		var operador1 = document.calc.operador1.value;
    		var operador2 = document.getElementById("operador2").value;
    		alert(operador1);
    		alert(operador2);
    		var result = eval(operador1 + operacion + operador2);
    		document.calc.resultado.value = result;
    	}
    
    function metros(convertidor){
    		var conversor1 = document.conv.conversor1.value;
    		alert(conversor1);
    		var result = eval(conversor1 + convertidor + 100);
    		document.conv.resultado.value = result;
    	}

	function kms(convertidor){
    		var conversor1 = document.conv.conversor1.value;
    		alert(conversor1);
    		var result = eval(conversor1 + convertidor+ 1000);
    		document.conv.resultado.value = result;
    	}
    	function pulg(convertidor){
    		var conversor1 = document.conv.conversor1.value;
    		alert(conversor1);
    		var result = eval(conversor1 + convertidor + 2.54);
    		document.conv.resultado.value = result;
    	}
    	function ft(convertidor){
    		var conversor1 = document.conv.conversor1.value;
    		alert(conversor1);
    		var result = eval(conversor1 + convertidor + 30.48);
    		document.conv.resultado.value = result;
    	}