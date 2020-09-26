//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Métodos (funciones o acciones que va  a hacer el objeto )
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function (color) {
        return this.color;
    };
    return Camiseta;
}());
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
