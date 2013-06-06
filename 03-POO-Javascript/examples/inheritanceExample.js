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

var Perro = function(name) {

	Animal.call(this, name);

	this.recogerPeriodico = function() {
		console.log('Recogí el periódico');
	}

	this.presentarse = function() {
		Animal.prototype.presentarse.call(this);
		console.log('Ah! y además soy un perro!');
	}

}

//La magia!
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

var loro = new Animal('Loro'); 
var baco = new Perro('Baco');


var Pincher = function (name) {
  
  Perro.call(this, name);

  this.serFeo = function() {
   console.log('Soy un Pincher y soy feo');
  }
}

Pincher.prototype = new Perro();
Pincher.prototype.constructor = Pincher;

var fufu = new Pincher('Fufu');
