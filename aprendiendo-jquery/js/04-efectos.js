$(document).ready(function(){
	var caja =$("#caja");
		caja.hide("normal");
		$('#ocultar').hide("normal");

		$("#mostrar").click(function(){
			$(this).fadeTo("slow",0);
			$("#ocultar").fadeTo("normal",1);
			caja.fadeTo("slow",1);
		});

		$("#ocultar").click(function(){
			$(this).fadeTo("slow",0);
			$("#mostrar").fadeTo("normal",1);
			caja.fadeTo("slow",0);

		});

		$('#todoenuno').click(function(){
			caja.slideToggle('fast');
			if($(this).text()=="Cerrar"){
				$(this).text("Abrir");
			}else{
				$(this).text("Cerrar");
			}
			
		});

		$("#animar").click(function(){
			caja.animate({marginLeft: '500',
						  fontSize: '35',
						  height: '110px'
						}, 'slow')
				.animate({borderRadius: '900px',
						  marginTop: '300px'

				},'slow')
				.animate({borderRadius: '0px',
						  marginLeft: '0px'

				},'slow')
				.animate({
						  marginTop: '0px'

				},'slow');
		});

});