var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //Métodos (funciones o acciones que va  a hacer el objeto ) Setter y Getter 
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
var camiseta = new Camiseta("asd", "asda", "asdas", "adasd", 13);
console.log(camiseta);
camiseta.estampacion();
//Clase HIJA
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //metodo
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera("asdasD", "DwadD", "ADasa", "adawDSA", 131);
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
