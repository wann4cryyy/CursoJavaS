var bicicleta = {
	color:'rojo',
	modelo:'2020',
	marca:'shimano',
	frenos:'disco',
	velocidadMaxima: '60km/h',
	cambiaColor: function(nuevo_color){
		// bicicleta.color = nuevo_color;
		this.color = nuevo_color;
		console.log(this);
	}
};

bicicleta.cambiaColor('azul');