'use strict'

var fecha = new Date();
var year  = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora= `
	El Año es : ${year}
	El Mes es : ${mes}
	El Dia es : ${dia}
	La hora es : ${horas}
	Los minutos son : ${minutos}
	Los segundos : ${segundos}
`;
console.log(textoHora);
console.log(Math.ceil(Math.random()*10));