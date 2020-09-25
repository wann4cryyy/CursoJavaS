'use strict'

var suma=0;
var cont=0;
var promedio=0;
do{
	var num= parseInt(prompt("Ingrese un numero, para finalizar ingrese un número negativo", 0));
		if (num>=0){
			cont=cont+1;
			suma += num;
			

		}
}while (num>=0)
alert("La suma de todos los numeros es: " + suma);
alert("El promedio de todos los números es: " + (suma/2));