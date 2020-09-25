'use strict'

var num1=parseInt(prompt("Introduce el numero 1", 0));
var num2=parseInt(prompt("Introduce el numero 2", 0));

while (num1<=num2){
	
	if (num1%2 != 0){
		console.log("El " + num1 +" es impar");

	}
	num1++;
}