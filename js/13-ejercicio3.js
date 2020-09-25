'use strict'

//escribe un programa que muestra todos los numeros comprendidos entre 2 números ingresados

var num1= parseInt(prompt("Introduce el primer número", 0));
var num2= parseInt(prompt("Introduce el segundo número",0));

document.write("<h2> De "+num1 + " a " + num2 +" estan estos numeros: ");

for (var i = num1; i<= num2; i++){
	document.write(i+"<br>");
}