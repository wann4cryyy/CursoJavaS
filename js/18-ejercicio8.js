'use strict'

/* 
 Calculadora:
 - pida dos numeros por pantalla
 - Si metemos uno mal que nos lo vuelva a pedir
 - En el cuerpo de l apagina, en una alerta y por la consola el resultado de
 sumar, restar, multiplicar y dividir esas dos cifras 
 */
var num1=parseInt(prompt("Ingrese el numero 1: ",0 ));
var num2=parseInt(prompt("Ingrese el numero 2: ",0 ));
 do{
  	if (isNaN(num1) || isNaN(num2) || num1<0 || num2<0 ){
 		alert("No es un número valido");
 		 num1=parseInt(prompt("Ingrese el numero 1: ",0 ));
		 num2=parseInt(prompt("Ingrese el numero 2: ",0 ));
 	}
 }while(isNaN(num1) || isNaN(num2) || num1<0 || num2<0 );

 var resultado = "la suma es : " + (num1+num2) + "<br>"+ 
 				"la resta es : " + (num1-num2) + "<br>" +
 				"la multiplicacion es : " + (num1*num2) + "<br>" +
 				"la división es : " + (num1/num2) + "<br>";
document.write(resultado);

// si quiero utilizar alert(resultado); necesito usar \n 
 var resultadoCMD = "la suma es : " + (num1+num2) + " \n"+ 
 				"la resta es : " + (num1-num2) + " \n" +
 				"la multiplicacion es : " + (num1*num2) + " \n" +
 				"la división es : " + (num1/num2) + " \n";
alert(resultadoCMD);
