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
window.nonExistent; //Undefined
var aThing;
window.aThing; // Undefined

aThing = null; 
window.aThing; 

/*************** Falsy/Truthy Values **************/

window.nonExistent == window.aThing; //true ?? --> Falsy Value

false + 1; 
false == 0;

true + 1;
true == 1; 

/*************** Operators **************/
// + 
3 + 4; 
3 + ' Es un Número';

// && 
if(true && false){console.log('If this happens, I should never ever code again.')}
if(true && true){console.log('This is expected.')}

//--> It acts as a protector, avoids exceptions.
var guardOperator = window.nonExistent.name; //throws exception
var guardOperator = window.nonExistent && window.nonExistent.name; //no exception, sets Undefined

window.nonExistent = {name: "Pam"};
var guardOperator = window.nonExistent && window.nonExistent.name; //no exception, sets "Pam"

// ||

if(false || false){console.log('If this happens, I should never ever code again.')}
if(true || false){console.log('This is expected.')}

//--> It acts as a default value
var defaultValue = window.noValue || "This is my default Value";

window.aValue = "House";
var defaultValue = window.aValue || "This is my default Value";


/*************** Type Coercion  **************/

1 == true;
'0.1' == 0.1;
'hola mundo' == ['hola mundo'];
null == undefined;

null == null;
undefined == undefined;


1 === true;
'0.1' === 0.1;
'hola mundo' === ['hola mundo'];
null === undefined;

null === null;
undefined === undefined;

