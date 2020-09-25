$(document).ready(function(){
	//mover elemento
	$(".elemento").draggable();

	//redimensionar 

	$(".elemento").resizable();

	//Lista de elementos seleccionables 

	//$(".lista-seleccionable").selectable();

	//ordenar los elementos

	$(".lista-seleccionable").sortable();

	//drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("has soltado algo dentro");
		}
	});

	//efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("fade",3000);
		//$(".caja-efectos").toggle("explode");
		//$(".caja-efectos").toggle("slide");
		//$(".caja-efectos").toggle("drop");
		//$(".caja-efectos").toggle("fold");
		//$(".caja-efectos").toggle("puff");
		//$(".caja-efectos").toggle("scale");
		//$(".caja-efectos").toggle("shake");
	});

	//TOOLTIP
	$(document).tooltip();

	//Dialogo
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	})
	
	//datepicker CALENDARIO
	$("#calendario").datepicker();

	//Tabs
	$("#pestanas").tabs();


});