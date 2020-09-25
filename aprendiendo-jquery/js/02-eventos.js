'use strict'
$(document).ready(function(){
	
	//Mouse over y MouseOut
	
	var caja = $('#caja');
	/*caja.mouseover(function(){
		$(this).css("transition","3000ms all");
		$(this).css("background","red");
	});
	caja.mouseout(function(){
		$(this).css("transition","3000ms all");
		$(this).css("background","yellow");
	});
	*/
	function cambiaRojo(){
		
		$(this).css("background","red");
	}
	function cambiaAmarillo(){
		
		$(this).css("background","yellow");
	}
	//Hover

	caja.hover(cambiaRojo,cambiaAmarillo);

	//Click, DobleClick
	caja.click(function(){
		$(this).css("background","green");
	});

	caja.dblclick(function(){
		$(this).css("background","pink");
	});

	//focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos");
	nombre.focus(function(){
		
		$(this).css("border","2px solid green");
	});
	nombre.blur(function(){

		$(this).css("border","1px solid #ccc");
		$(this).val();
		datos.text($(this).val()).show(); // muestra la caja de datos
	});
	
	//mousedown y mouseup 

	datos.mousedown(function(){
		$(this).css("border-color","grey");
	});
	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//mousemove, dice las cordenadas donde se encuentra el ratón.

	$(document).mousemove(function(){
		console.log(event.clientX, event.clientY);
		
		var sigueme = $("#sigueme");
		sigueme.css("left",event.clientX);
		sigueme.css("top",event.clientY);
	});
});