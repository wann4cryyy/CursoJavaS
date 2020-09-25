'use strict'

//eventos de raton

window.addEventListener('load', function(){ // se utiliza para cargar la pagina y que no tenga error al cargar primero el js y dsp el html
	function cambiarColor(){

	var bg = boton.style.background;

	if(bg=="green"){
		boton.style.background="red";
		boton.style.padding="20px";
		boton.style.border="1px solid #ccc";
	}else{
		boton.style.background="green";
	}
	return true;
}

var boton = document.querySelector("#boton");

boton.addEventListener('click',function(){ // mejor manera de manipular eventos
	cambiarColor();
});

//mouse over 

boton.addEventListener('mouseover', function(){ //cuando pongo el mouse arriba cambia el color
	boton.style.background = "#ccc";
});

//mouse out 
boton.addEventListener("mouseout", function(){ //cuando saco el mouse cambia el color
	boton.style.background = "grey";
});

//focus
var input =document.querySelector("#campo_nombre");
input.addEventListener("focus", function(){ //cuando hago foco en el evento
	console.log("Estas haciendo foco en el input");
});

//blur

input.addEventListener("blur", function(){ //cuando salgo del foco del evento
	console.log("Estas fuera del input");
});


//keydown
input.addEventListener("keydown", function(event){ 
	console.log("[keyDown]Pulsando esta tecla", String.fromCharCode(event.keyCode));

});


//keypress
input.addEventListener("keypress", function(event){
	console.log("[keyPress]Tecla presionada", String.fromCharCode(event.keyCode));

});

//keyup
input.addEventListener("keyup", function(event){
	console.log("[keyUp] Tecla soltada", String.fromCharCode(event.keyCode));

});



})

