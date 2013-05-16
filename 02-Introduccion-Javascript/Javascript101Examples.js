/********************Value types***********************/

// Undefined is a type
typeof(window.valorx); 

// There are no Integer, doubles, etc. only "Number"
typeof(10);
typeof(0.5);

//Other examples
//String
typeof("Javascript 101");

//Function
typeof(function(){});

//Objects
//Arrays
var myArray = ["olas", "del", "mar"];
typeof(myArray);
myArray instanceof Array; 

//Dates
var today = new Date(); 
typeof(today);
today instanceof Date; 

//Null
typeof(null);

//They all behave like objects, you can execute methods on them 
"look".bold(); 

false.toString(); 

var myNumber = 0.65; 
myNumber.toFixed();

/******************** Numbers ***********************/
//64bit precision 
0.1 + 0.2;

//Methods to parse Strings into Numbers
parseInt("10",10)
parseInt("10",2)

typeof(nan); //Undefined

isNaN(1);
isNaN("1");
isNaN("Hola");

typeof(NaN); //Number
isNaN(NaN); 

/*************** Null vs Undefined ****************/
window.noExiste; //Undefined
var otraCosa;
window.otraCosa; // Undefined

otraCosa = null; 
window.otraCosa; 

/*************** Falsy/Truthy Values **************/

window.noExiste == window.otraCosa //true ?? --> Falsy Value

false + 1; 
false == 0;

true + 1;
true == 1; 