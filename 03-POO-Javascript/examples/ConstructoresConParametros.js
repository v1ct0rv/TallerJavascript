var Avion = function(construc) {
	construc = construc || {};
	this.marca = construc.marca || '';
	this.modelo = construc.modelo  || '';
	this.pasajeros = construc.pasajeros  || 0;

	//Si en un constructor retorno un objeto
	//this es ignorado! Para que el constructor 
	//funcione bien.. qquite la línea que sigue (loc:10)
	return {wtf:'WHAT?'};
}

var miAvion = {
	marca: 'Boeing', 
	modelo: '787',
	pasajeros : 0
}

var miBoeing = new Avion(miAvion);
