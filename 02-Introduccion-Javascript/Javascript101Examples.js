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
typeof(NaN); //Number