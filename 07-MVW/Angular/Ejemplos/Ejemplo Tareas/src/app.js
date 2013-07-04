angular.module('app', []).

  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/tareas', {
		  templateUrl: 'src/views/tareas-list.html',
		  controller: TareaListController
		  }).
	  
	  //mediante dos puntos (:) definimos un parámetro
      when('/detalleTareas', {
		  templateUrl: 'src/views/tarea.html',
		  controller: TareaListController
		  }).
	 
	  //cualquier ruta no definida  
      otherwise({
		  redirectTo: '/tareas'});

}]);