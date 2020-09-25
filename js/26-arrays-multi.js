'use strict'

var cateegorias = ["Accion","Terror","Comedia","Drama"];
var Peliculas = ["Die Hard","El exorcista","3 chilfados","La vida es bella"];

var cine= [cateegorias,Peliculas];

//console.log(cine[0][0]); muestra 1 matriz el 1 es el array y el 2 es q indince 
//console.log(cine[1][0]);

//operaciones con array

var elemento= "";

do{
	
	elemento=prompt("Introduce Pelicula");
	Peliculas.push(elemento); // añade al ultimo el elemento al array Peliculas 
}while(elemento != "ACABAR")

Peliculas.pop(); // elimina el ultimo elemento del array 
Peliculas[0] = undefined; // indefine un elemento 


var indice = Peliculas.indexOf("3 chilfados");
if (indice >-1){
	Peliculas.splice(indice,1); // elimina el elemento en el indice encontrado, tantos pasos
}

console.log(Peliculas);

//convertir a un string un array, lo separa por comas

var peliculas_string = Peliculas.join();
// console.log(peliculas_string);

//Separa una cadena y lo convierte en array
var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");

// console.log(cadenaArray);

//Ordenar el Array por default es alfabetico 

Peliculas.sort();
//console.log(Peliculas);

// Darle la vuelta a la array

Peliculas.reverse();
//console.log(Peliculas);

//Metodo de recorrer un array

for(let lenguaje int lenguajes){
	document.write("<")
}

