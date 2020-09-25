'use strict'

//transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "2020"

var dato = numero.toString();


console.log(dato);

//busquedas dentro de una string 

var busquedas= texto1.indexOf("curso"); // usar indexOf() o search(), apartir de que caracter, si no existe el valor es -1
//metodo match(), devuelve el index y el input 1 coincidencia (/curso/g) global 
// substr (desde,hasta); saca la palabra desde que caracter  hasta cuantas letras
// charAt() sacar una letra en concreto, desde que indice
// startsWith() busca la palabra inicio del string, boolean eJemplo: Bienvenido = true Bienvenido al curso = true 
// includes() busca una palabra exacta, key sensitive, boolean.
// replace() reemplaza la plabra en el parametro por otra replace("JavaScript","Java")
// slice() separa el string apartir del caracter que quieras, elimina los caracteres incluidos en ese indice 
// split() recortar las palabras y meterlas en un array, por espacios texto1.split(" "); 
// trim() quita los espacios por delante y por detras del string 
  
console.log(busquedas);