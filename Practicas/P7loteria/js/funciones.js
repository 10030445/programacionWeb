$(document).ready(
	function(){

		$('#mastercard').attr("src","img/go2.jpg");

		$('#img1').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img2').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img3').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img4').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img5').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img6').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img7').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		$('#img8').attr("src","img/l"+parseInt(Math.round(Math.random()*34))+".jpg");
		



	var cont = 0 ;
		var nuevacarta=nuevacarta = 'img/l'+parseInt(Math.round(Math.random()*34))+'.jpg';
;
		


		setInterval(
			function()
			{
			
					if (cont <= 34) {
				
							nuevacarta = 'img/l'+parseInt(Math.round(Math.random()*34))+'.jpg';

							$('#mastercard').attr('src',nuevacarta);

							cont ++;	

					};

			},2000
		)

		//if (cont=2){
		//				$('#mastercard').attr('src',"img/fin");
		//			};

			$('.carta').click(
			function(){
				$(this).fadeTo("slow","0.3");

				
			}
		);

	}

);

