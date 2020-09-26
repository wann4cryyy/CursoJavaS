//Clase (molde del objeto)
class Camiseta {
	//Propiedades (caracteristicas del objeto)
	public color: string;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;
	//Métodos (funciones o acciones que va  a hacer el objeto ) Setter y Getter 
	public setColor(color){
		this.color = color;
	}

	public getColor(color){
		return this.color;
	}


}

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

var camiseta = new Camiseta();
camiseta.setColor("rojo");

var playera = new Camiseta();
playera.setColor("azul");


console.log(camiseta.getColor(), playera);