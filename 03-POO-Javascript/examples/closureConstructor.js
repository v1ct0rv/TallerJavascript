var Persona = function(nombre) {

	/*-----------------------------------*/
	/*---------Variables Privadas----------*/
	var _edad = 0;
	var _vivo = false; 
	var	_nombre = nombre || 'N.N';  
	var _pesoKgs = 5; 
	var _caloriasQuemadasDia = 100; 

	/*-----------------------------------*/
	/*---------Métodos Privadas----------*/
	function digerir(comida) {
		//Calculos complicados para saber como afecta el Peso!
		_pesoKgs = _pesoKgs + Math.random();
	}

	/*-----------------------------------*/
	/*---------Métodos Privilegiados----------*/
	this.nacer = function() {
		_vivo = true; 
	}

	this.crecer = function(agnos) {
		//validar que agnos sea un número válido!
		_edad = _edad + agnos || _edad+1;
	}

	this.comer = function(comida) {
		digerir(comida);
	}

	this.morir = function() {
		_vivo : false; 
	}

	this.getEdad = function() {
		return _edad;
	}

	this.getNombre = function() {
		return _nombre;
	}

	this.estaVivo = function() {
		return _vivo;
	}
}

/*-----------------------------------*/
/*---------Métodos Públicos----------*/
Persona.prototype.presentarse = function() {
	console.log('Hola! Mi nombre es ' + this.getNombre());
}
