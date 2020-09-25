'use strict'

/* Hacer un programa que  :
1- pida 6 numeros por pantalla y los meta en un array
2- Tiene que mostrar el array entero en el cuerpo de la pagina y la consola
3- Sacar el array ordenado y mostrarlo
4- Invertir su orden y mostrarlo
5- Mostrar cuantos elementos tiene el array
6- Busqueda de un valor introducido por el usuario, y que nos diga si está en el array y su posicion
*/ 

function mostrarArray(elementos, textoCustom = ""){
		document.write("<h1>Contenido del Array Números"+textoCustom+"</h1>");
		document.write("<ul>");
		elementos.forEach((elemento, index) =>{
		document.write("<strong>"+elemento+"</stron><br/>")
	});
	document.write("</ul>");
}

//pedir 6 nums
var num = new Array(6);
	
for(var i=0; i<=5; i++){
	num[i]= parseInt(prompt("Introduce el numero ", 0));
}


// Mostrar el cuerpo de la pagina
mostrarArray(num);
console.log(num);

//Ordenar y mostrar
num.sort(function(a,b){return a-b}); // Cuando es un array de enteros 
mostrarArray(num,' Ordenado');

//Invertir y mostrar
num.reverse();
mostrarArray(num," Invertido");

//Cuantos elementos existen
document.write("<h1> El array tiene " + num.length + " elementos");

// busqueda

var busqueda = parseInt(prompt("Busca un numero ", 0));
var posicion= num.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1){
	document.write("<hr/><h1> ENCONTRADO</h1>");
	document.write("<h1> Posicion de la busqueda: "+ posicion +"</h1>");
}else{
	document.write("<hr/><h1> NO ENCONTRADO</h1>");

}


