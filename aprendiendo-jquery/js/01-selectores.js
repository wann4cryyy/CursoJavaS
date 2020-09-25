'use strict'
//SELECTORES
$(document).ready(function(){
	
	// selector de id
	$("#rojo").css("background","red")
			  .css("color", "white");
	$("#amarillo").css("background","yellow")
				  .css("color","green");
	$("#verde").css("background","green")
			   .css("color","white");

	//Selector de clase
 	$('.zebra').css("padding","5px");
 	
 	$('.sinborde').click(function(){
 		$(this).addClass('zebra');
 	});

 	//Selectores de etiqueta
 	var parrafos = $('p').css("cursor","pointer");

 	parrafos.click(function(){
 		var that = $(this);
 		if(!that.hasClass('grande')){
 			that.addClass("grande");
 		}else{
 			that.removeClass("grande");
 		}
 		
 	});

 	// selector de atributo

 	$('[title="Google"]').css('background','#ccc');
	$('[title="Facebook"]').css('background','blue')
						   .css('color',"white");

	//otros
	$('p,a').addClass('margen-superior');

	var busqueda = $("#caja").find('.resaltado');
	$(busqueda[1]).css("background","green");
});