'use strict'

// dom Document Object Model

function cambiaColor(color){
	caja.style.background = color;
	contenidoEnTexto.style.color = color;
}

//conseguir elementos con un ID concreto




// var caja = document.getElementById("micaja"); // selecciono un elemento con el nombre de id micaja en 
var caja = document.querySelector("#micaja"); //selecciono un elemento con el nombre de id micaja

caja.innerHTML = "TEXTO MODIFICADO EN LA CAJA";
caja.style.background = "red";
caja.style.padding="20px";
caja.style.color = "white";
caja.className = "hola"; //añadir una clase a la caja 


//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
// var contenidoEnTexto = todosLosDivs[2];

// contenidoEnTexto.innerHTML= "CAMBIO DE CARACTERES Y COLOR";
// contenidoEnTexto.style.color = "red";
// console.log(todosLosDivs);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


var valor;
for(valor in todosLosDivs){	
	
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p")
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		document.querySelector("#miseccion").append(parrafo);
	}
}

seccion.append(hr);
//conseguir elementos por su clase, classname es mejor para muchos elementos 
var div;
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
console.log(divsAmarillos);
divsAmarillos[0].style.background="yellow";
for (div in divsRojos){
	if(divsRojos[div].className == "rojo"){
	divsRojos[div].style.background ="red";
	}
}
console.log (divsRojos);

// query selector, recomendable para 1 id 
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo"); // selecciona solo 1
console.log(claseRojo);

//existe el querySelectorAll para seleccionar varios elementos
var claseRojoVarios = document.querySelectorAll(".rojo");
console.log(claseRojoVarios);