'use strict'

window.addEventListener('load', function(){
	// TIMERS

	function intervalo(){
		var tiempo = setInterval(function(){ // timer para cambiar encabezado de tamaño cada tanto tiempo 
		console.log("Set interval ejecutando");
		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize=="50px"){
			encabezado.style.fontSize = "20px";
		}else{
			encabezado.style.fontSize = "50px";
		}
		
	}, 5000);
		return tiempo;
	}

	
	var tiempo = intervalo();

	var stop = document.querySelector("#stop");
	stop.addEventListener("click", function(){
		clearInterval(tiempo);
		alert("Has parado el Intervalo");
	});

	var start = document.querySelector("#start");
	start.addEventListener('click', function(){
		alert("Has iniciado el intervalo bucle");
		setInterval(tiempo);
	})
});

// setTimeout() se ejecuta una vez cada 5 segundos 

