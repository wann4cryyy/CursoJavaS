
//Interfaz
interface CamisetaBase{
	setColor(color);
	getColor();
}

//Decorador

function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de: "+ logo);
		}
	}
}



//Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
	//Propiedades (caracteristicas del objeto)
	public color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;
	//Métodos (funciones o acciones que va  a hacer el objeto ) Setter y Getter 
	constructor (color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color
	}



}

var camiseta = new Camiseta("asd","asda","asdas","adasd",13);
console.log(camiseta);
camiseta.estampacion();

//Clase HIJA

class Sudadera extends Camiseta{
	public capucha: boolean;

	//metodo
	setCapucha(capucha:boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}
}

var sudadera = new Sudadera("asdasD","DwadD","ADasa","adawDSA",131);
sudadera.setCapucha(true);

console.log(sudadera);

/*var camiseta = new Camiseta();

camiseta.color = "Rojo";
camiseta.modelo = "Manga corta";
camiseta.marca = "Nike";
camiseta.talla = "XL";
camiseta.precio = 1440;

var playera = new Camiseta();
playera.color = "Azul";
playera.modelo = "Manga larga";
playera.marca = "Adidas";
playera.talla = "L";
playera.precio = 1500;
*/

/*var camiseta = new Camiseta("rojo","manga larga","nike","1",14);
camiseta.setColor("Rojo");



console.log(camiseta);*/