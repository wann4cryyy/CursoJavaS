import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
		public titulo: String = 'Componente de zapatillas';
		public zapatillas: Array<Zapatilla>;
		public marcas: String[];
		public color: String;
		public mi_marca: String;

		constructor(){
			this.color = 'yellow';
			this.marcas = new Array();
			this.zapatillas = [
			new Zapatilla('Jc','Nike','Roja',80,true),
			new Zapatilla('Jcm','Adidas','Azul',40,true),
			new Zapatilla('Abc','Nike','Azul',12,true),
			new Zapatilla('DEAD','Run','RED',52,false)
			];

		}

		ngOnInit(){
			console.log(this.zapatillas);
			this.getMarcas();
		}


		getMarcas(){
			this.zapatillas.forEach((zapatilla, index) =>{
				
				if(this.marcas.indexOf(zapatilla.marca) < 0) {
					this.marcas.push(zapatilla.marca);
				}
				console.log(index);
			});

			console.log(this.marcas);
		}

		getMarca(){
			alert(this.mi_marca);
		}

		addMarca(){
			this.marcas.push(this.mi_marca);
		}


		borrarMarca(indice){
			//delete this.marcas[indice];
			this.marcas.splice(indice,1);
		}

		onBlur(){
			console.log("Has salido del input");
		}

		mostrarPalabra(){
			alert(this.mi_marca);
		}

}

