'use strict'


var texto="Hola mundo soy una variable global" 
var numero=123;

function holaMundo(texto){
	var hola_mundo =" Texto dentro de función ";
	console.log(texto); 
	console.log(typeof numero.toString());//variable fuera de la funcion , 
	console.log(hola_mundo);//variable creada dentro de la funcion 
}


holaMundo(texto);

// console.log(hola_mundo);  no se puede llamar si esta definida dentro de la funcion 

