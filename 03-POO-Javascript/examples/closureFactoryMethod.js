var persona = function(nombre) {

	var _edad = 0;
	var _vivo = false; 
	var	_nombre = nombre || 'N.N';  
	var _pesoKgs = 5; 

	function digerir(comida) {
		//Calculos complicados para saber como afecta el Peso!
		_pesoKgs = _pesoKgs + Math.random();
	}

	return {

		nacer : function() {
			_vivo = true; 
		},

		crecer : function(agnos) {
			//validar que agnos sea un número válido!

			_edad = _edad + agnos || _edad++;
		},

		comer : function(comida) {

			digerir(comida);
		},

		morir : function() {

			_vivo : false; 
		},

		getEdad : function() {
			return _edad;
		},

		estaVivo : function() {
			return _vivo;
	 	}
	}
}
