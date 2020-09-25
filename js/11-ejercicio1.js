'use strict'
// programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

var numero_1= parseInt(prompt("Ingrese el primer numero", 0));
var numero_2= parseInt(prompt("Ingrese el segundo numero", 0));
console.log(numero_1,numero_2);

while(numero_1 <= 0 || numero_2 <= 0 || isNan(numero_1) || isNan(numero_2)){
	alert("Ingrese un numero mayor a 0");
	var numero_1= parseInt(prompt("Ingrese el primer numero", 0));
	var numero_2= parseInt(prompt("Ingrese el segundo numero", 0));
}

if (numero_1>numero_2) {
	alert("El mayor es el numero 1");
}else if (numero_2>numero_1){
	alert("El mayor es el numero 2");
}else if (numero_2==numero_1){
	alert("Son iguales");
}
