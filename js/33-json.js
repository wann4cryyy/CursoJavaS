'use strict'

// JSON - JavaScript Object Notation 

var pelicula = {
	titulo : 'Batman vs Superman',
	year:  2017,
	pais: "EEUU"
};

var peliculas =[
	{titulo: "La verdad duele", year: 1233, pais:"francia"},
	pelicula,
	{titulo: "ASDADadas", year: 3213, pais:"francia"},
]
var caja_peliculas= document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year) ;
	caja_peliculas.append(p);
}


console.log(peliculas);