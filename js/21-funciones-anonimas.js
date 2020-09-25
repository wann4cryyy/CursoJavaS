'use strict'

//funcion anonima
// no tiene nombre
// se usa para hacer callbacks 

var pelicula = function (nombre) { //voy a consola e ingreso pelicula("nombre de pelicula");
	return "La pelicula es : " + nombre;
}

function sumame(num1,num2, sumaYmuestra, sumaPorDos){
	var sumar= num1+num2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
	
}

sumame(5,7,function(dato){
	console.log("La suma es: ", dato);
},
function(dato){
	console.log("La suma por dos es: ", (dato*2));
});


/* sumame(5,7, dato => { //FUNCION DE FLECHA
	console.log("La suma es: ", dato);
},
function(dato){
	console.log("La suma por dos es: ", (dato*2));
});
*/