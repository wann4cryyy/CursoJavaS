'use strict'

//tabla de multiplicar por un número introducido por pantalla

var num=parseInt(prompt("De que numero quieres la tabla",1));
document.write("<h1> Tabla del "+ num +"</h1>");
for (var i=0; i<=10;i++){
	document.write(i+" x " + num + " = " + num*i +"<br>");
}
