'use strict'

//FETCH Y PETICIONES A SERVICIOS API RESTFULL

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

	getUsuarios()
		.then(data => data.json())
		.then(users => {
			listadoUsuarios(users.data);
			return getJanet();
		})
		.then(data => data.json())
		.then(user =>{
			mostrarJanet(user.data);

			return getInfo();
		})
		.then(data =>{
			console.log(data);
		})
		.catch(error =>{
			alert("Error en las PETICIONES");	
		});

function getUsuarios(){
	return fetch ("https://reqres.in/api/users");
}
function getJanet(){
	return fetch("https://reqres.in/api/users/2");
}


function getInfo(){
	
	var profesor = {
		nombre: "victor",
		apellido: "robles",
		url:"https://victorroblesweb.es"
	};
	return new Promise((resolve,reject)=>{
		var profesor_string =  JSON.stringify(profesor);
		if(typeof profesor_string!='string') return reject("error");
		return resolve(profesor_string);
	});
	
}

function listadoUsuarios(usuarios){
	usuarios.map((user,i)=>{
		let nombre = document.createElement("h3");
		nombre.innerHTML= i + " "+ user.first_name + " " + user.last_name;
		div_usuarios.appendChild(nombre);
		document.querySelector(".loading").style.display="none";
	});
}
function mostrarJanet(user){
	console.log(user);
	let nombre = document.createElement("h4");
	let avatar = document.createElement("img");

	nombre.innerHTML = user.first_name + " 	"+ user.last_name;
	avatar.src = user.avatar;
	avatar.width = "100";
	div_janet.appendChild(avatar);
	div_janet.appendChild(nombre);
	document.querySelector("#janet .loading").style.display="none";
}