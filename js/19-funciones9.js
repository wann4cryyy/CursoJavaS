'use strict'


//Funciones
// Una funcion es una agrupación reutilizable de un conjunto de intrucciones 

function porConsola(num1,num2){
		console.log("Hola soy la calculadora");
		console.log("Suma: " + (num1+num2));
		console.log("Resta: "+ (num1-num2));
		console.log("Multiplicación: "+ (num1*num2));
		console.log("Division: "+ (num1/num2));
		console.log("****************");

}
function porPantalla(num1,num2){
		document.write("Hola soy la calculadora"+ "<br>");
		document.write("Suma: " + (num1+num2)+ "<br>");
		document.write("Resta: "+ (num1-num2)+ "<br>");
		document.write("Multiplicación: "+ (num1*num2)+ "<br>");
		document.write("Division: "+ (num1/num2)+ "<br>");
		document.write("****************"+ "<br>");

}



function calculadora(num1, num2, mostrar = false) {
	if (mostrar==false){
		porConsola(num1,num2);
	
	} else {
		porPantalla(num1,num2);
	}
	return true
}






calculadora(2,3,true);
calculadora(2,4,true);
calculadora(2,5,false);
calculadora(2,6,true);
//parametros opcionales 

// Invocar o llamar la funcion
/*
for (var i=1 ; i<=5; i++){
	calculadora(i,1);
}
*/