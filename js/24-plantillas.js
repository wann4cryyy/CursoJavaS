'use strict'


// Plantillas de texto

var nombre = prompt("INgrese su nombre");
var apellidos = prompt("Apellido");

// var texto = "Mi nombre es " + nombre + " y mi apellido es " + apellidos

// plantilla de javascript
var texto = `
	<h1> Hola que tal</h1>
	<h3> Mi nombre es: ${nombre}</h3>
	<h3> Mi apellido es: ${apellidos}</h3>					
`;

document.write(texto);
