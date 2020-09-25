'use strict'

// LocalStorage 

	//Comprobar si el localstorage existe 
if(typeof(Storage) != 'undefined'){
	console.log("LocalStorage disponible");
}else{
	console.log("LocalStorage no disponible");
}

//Guardar datos en el localStorage

localStorage.setItem("titulo", "Curso de Js");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");


//Guardar objetos en el loclaStorage

var usuario ={ //COnvertir en objeto JSON en formato STRING 
	nombre: "Juan Cruz Márquez",
	edad: 23,
	sexo: "Masculino"
};



localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#usuario").append(" " + userjs.nombre+ " - "+ userjs.edad);

//BORRAR elementos
localStorage.removeItem("usuario");
//borrar todo 
localStorage.clear();


