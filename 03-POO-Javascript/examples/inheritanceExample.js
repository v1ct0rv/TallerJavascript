var Animal = function (name) {
	var _edad = 0; 

	this.nombre = name || 'N.N';

	this.crecer = function (annos) {
		_edad = _edad + annos || _edad + 1;
	}

	this.getEdad = function () {
		return _edad;
	}
}

Animal.prototype.presentarse = function () {
	console.log('Soy un animal y mi nombre es: ' + this.nombre);
}

Animal.prototype.correr = function () {
	console.log('Estoy corriendo');
}

var Perro = function(name, raza) {
	
	//Invocando al constructor del padre
	Animal.call(this, name);

	var _raza = raza || 'Desconocida';

	this.getRaza = function () {
		return _raza;
	}
}

//La magia!
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

Perro.prototype.recogerPeriodico = function() {
	console.log('Recogí el periódico');
}

Perro.prototype.presentarse = function() {
	Animal.prototype.presentarse.call(this);
	console.log('Ah! y además soy un perro!');
}

var loro = new Animal('Loro'); 
var baco = new Perro('Baco', 'Weimaraner');


var Pincher = function (name) {
  
  Perro.call(this, name, 'Pincher');

  this.serFeo = function() {
   console.log('Soy un Pincher y soy feo');
  }
}

Pincher.prototype = new Perro();
Pincher.prototype.constructor = Pincher;

var fufu = new Pincher('Fufu');
