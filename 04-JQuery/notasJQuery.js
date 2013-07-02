//En Consola en jquery.com
var homeJQ = $('#home-content'); 

//Search on the descendents not only the children
homeJQ.find('.resources');

homeJQ.children(); 

//Si se pregunta por algo que no existe retorna un array vacio
//pero aùn asì tiene acceso a todas las funciones de jquery
homeJQ.find('.yonoexisto');


// $('home-content') vs. document.getElementById('home-content')

//Si obtengo el objeto del dom con getElementById no hace
//el wrapping del objeto sino que lo retorna puro, o sea que no tengo
//las functiones de jquery para manipularlo.
var homeNoJQ = document.getElementById('home-content');


// Diferencia entre adicionar código con .html y .text
var sidebar = homeJQ.find('aside');

//sobreescribe lo que hay dentro de sidebar
// Lo ejecuta como html
sidebar.html('<a href=\'#\'>Link</a>');
// Lo ejecuta como texto
sidebar.text('<a href=\'#\'>Link</a>');

// Le adiciona a lo que ya existe sin reeemplazar lo que hay dentro del elemento
// Lo procesa como html
sidebar.append('<a href=\'#\'>Link</a>');


//+++++++++++++++EVENTOS+++++++++++++++++//
// .click existe, pero por buenas prácticas es mejor hacerlo con la sintaxis 'on'
// Por qué? --> Averiguar. 

// En el evento de los <li> de un tag cuya clase sea 'resources'
// ejecute la función que le paso por parametro en este caso con alert('aja')
// Esto no reemplaza ningùn evento asociado anteriormente, sino que lo concatena
$('.resources li').on('click', function() {
	alert('aja');
});

//Para listar todos los eventos asociados a un elemento, en este caso el primero de los <li>
$._data( $(".resources li")[0], "events" );

//Sizzle: Selector engine de JQuery (En caso que no esté usando JQuery como librería)

//++++++++++++++++++++ AJAX ++++++++++++++++++++++++++//

//the default method is get
$.ajax({
	type: 'get', //this is redundant
	....
})

//.done es equivalente all callback

//visualJson para validar lo que retorna una url rest

//cuando yo dentro de un selector pongo <>, JQuery crea el tag
//$("<li>") --> Eso crea un tag <li>
