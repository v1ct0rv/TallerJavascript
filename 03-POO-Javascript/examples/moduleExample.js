var CalculadoraDieta = function() {
 
 //Definiendo
 var calcularCalorias = function() { 
  //calculo Complejo
  return Math.random();
 }

 var caloriasAKilogramos = function() {
  //calculo Complejo
  return Math.random();
 }

 var caloriasHarinas = function() {
  //calculo Complejo
  return Math.random();
 }

 return function(plato) {
   var peso = calcularCalorias() * caloriasHarinas();
   console.log('Usted engordó ' + peso);
 }
}