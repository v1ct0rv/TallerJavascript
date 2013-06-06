var crearCalculoProbabilidadLluvia = function() {
 
 //Variable Privada 
 var _constanteDeFulano = 0.5;

 //Método Privado
 function calcularPresionAtmosferica(ciudad) {
  return Math.random();
 }

 //'return function' hace la magia!
 return function(ciudad, mes) {
  var presion = calcularPresionAtmosferica(ciudad);
  return Math.floor(presion*_constanteDeFulano*100);
 }
}

//Crea la función que calculaLaProbabilidad
var calcularProbabilidadLluvia = crearCalculoProbabilidadLluvia();