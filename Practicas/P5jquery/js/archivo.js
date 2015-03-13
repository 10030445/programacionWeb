
$(document).ready(function(){

    alert('hola desde jquery');

    $('h1').hide('slow');

    $('h1').show('slow');
     
     $('h1').click(function(){
        $(this).hide('slow');

        });

});

