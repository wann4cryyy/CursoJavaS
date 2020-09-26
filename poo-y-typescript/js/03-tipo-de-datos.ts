// String /cygdrive/c/Users/JUAN CRUZ/Desktop/Cursojs/JavaScript/hola-mundo/poo-y-typescript/js


let cadena: String = 'Juan Cruz'

// Number 
let numero: Number = 12;


//Booleano

let verdadero_falso: Boolean = true;

// Any

let cualquiera: any = 'hola';

cualquiera= 12;

//Arrays 
var lenguajes: Array<String> = ['PHP','JAVA','PYTHON'];

let years: Number[] = [12,13,14,15];

// Array any
var lenguajes2: Array<any> = ['PHP',12,true];

//Dato con mas de un tipo

var datosJuntos: String | Number = 'Juan Cruz';
datosJuntos = 23;

//Crear tipo de dato 

type letrasonumeros = String | Number ;

let alfanumerico: letrasonumeros = 'ijaijadiawj';
alfanumerico = 12;

// LET VS VAR 

var numero1 = 10;
var numero2 = 12;

if(numero1==10){
	let numero1 = 44;
	var numero2 = 55;
	console.log(numero1, numero2);
}

console.log(numero1, numero2);