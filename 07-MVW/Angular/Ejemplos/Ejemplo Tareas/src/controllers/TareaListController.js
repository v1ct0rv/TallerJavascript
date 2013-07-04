/**
* LibrosListController
* Controlador del listado de libros
*/
function TareaListController($scope) {
	$scope.tareas = [];
	$scope.totalTareas = 0;
  
  $scope.agregarTarea = function (){
  	$scope.tareas.push({
  		nombre : $scope.nuevaTarea,
  		estado : "pendiente",
  		modificando : false,
  	});

  	$scope.nuevaTarea = "";
  	$scope.totalTareas = $scope.tareas.length;
  };

  $scope.eliminar = function (tarea){
  	tarea.estado = "eliminada";
  };

  $scope.finalizar = function (tarea){
  	tarea.estado = "finalizada";
  };

  $scope.tengoTareas = function (){
  	return ($scope.tareas.length > 0);
  };
  
  $scope.modificar = function(tarea){
  	tarea.modificando = true;
  };

   $scope.finalizarModificacion = function(tarea){
  	tarea.modificando = false;
  };

  //defines una variable
  $scope.var1 = "variable definida desde el controlador";
  
  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.finalizada = "finalizada";
  $scope.eliminada = "eliminada";
  $scope.pendiente = "pendiente";
}