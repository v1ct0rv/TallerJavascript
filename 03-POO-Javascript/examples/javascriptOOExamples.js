var persona = {
 nombre : 'Pepe Perez', 
 edad : 25,
};

var empleado = Object.create(persona);
empleado.contrato = 'Indefinido';
empleado.pedirAumento = function () {
	console.log('Jefe, súbame el salario por favor!');
}

persona.genero = 'masculino';

function iterarTodo() {
	for (var name in empleado) {
 		console.log(name);
	}
}

function iterarAtributosPropios() {
	for (var name in empleado) {
 		if (empleado.hasOwnProperty(name) && typeof(empleado[name]) !== 'function') {
 			 console.log(name);
		 }
	}
}

function sinReturn () {
	
}

sinReturn();

var perro = {
 $color : 'Gris',
 $nombre: 'Baco',
 $raza : 'Weimaraner', 

 ladrar : function() {
  console.log('rof!')
 }
}


function funcionBasica() {
	console.log('Función ejecutada como función');
}


var gato = {
 $color : 'Negro',
 $nombre: 'Orión',
 $raza : 'Chandoso', 

 maullar : function() {

  function sinAcceso() {
   console.log('Al leer $raza :' + $raza);
  }

  sinAcceso();
 }
}

var Avion = function() {
	this.marca = 'Airbus';
	this.modelo = 'A380';
	this.pasajeros = '300';
	return this; 
}

var MiObjeto = function() {
	console.log('Retorna un Objeto vacío.');
}
