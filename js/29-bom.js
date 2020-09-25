'use strict'

// BOM - browser object model
function getBom(){
	console.log (window.innerHeight); // tamaño de pantalla
	console.log (window.innerWidth); 
	console.log (screen.width); 
	console.log (screen.height); 
	console.log(window.location.href); //url donde me encuentro
}

function redirect(url){
	window.location.href = url; //redireccion en el navegador 
}

function abrirVentana(url){
	window.open(url); //abre en otra ventana, window.open(url,"","width:400,heigth:400") abre con tamaño indicado
}


getBom();