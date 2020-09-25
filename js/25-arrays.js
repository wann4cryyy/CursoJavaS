'use strict'

//arrays, arreglos, matrices

var nombre= "Juan";
var nombres = ["Jose","Juan","Sandra",52,true];

var lenguajes = new Array ("PHP","JAVA","PYTHON","JAVA");
console.log(lenguajes);
console.log(nombres);

// longitud de array 

console.log(nombres.length);

var elemento= parseInt(prompt("Que elemento del array quieres",0));

alert(nombres[elemento]);


document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*

for(var i=0; i<lenguajes.length;i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ul>");

*/
/*
lenguajes.forEach((elemento,indice,arr)=>{
	console.log(arr);
	document.write("<li>"+indice+" "+elemento+"</li>");
});
*/


//Otro Metodo de recorrer un array

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


//Busquedas en un array con find() el nombre y con findIndex() el indice

var busqueda = lenguajes.find(lenguaje => lenguaje == "JAVA");
var precios = [20,10,50,80,12];
var busqueda2 = precios.some(precio => precio >= 20); //valores mayores a X numero, boolean
console.log(busqueda2);





	


