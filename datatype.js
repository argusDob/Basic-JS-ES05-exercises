
//Data types ES05
//Monday 13/05



var x = 16 + "Volvo"; //output: 
console.log(x);

var q =16 +4 "Volvo" ; // output: 20Volvo 

var z = "Volvo" + 16 + 4; // output: Volvo164 since the first operand is a string, all operands are treated as strings.

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String


var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes


var answer1 = "It's alright"; //Single quotes inside double quotes
var answer2 = "He is called 'Johnny'"; //Single quotes inside double quotes
var answer3 = 'He is called "Johnny"'; //Double quotes inside single quotes


var x1 = 34.00;     // double
var x2 = 34;        // integer

var cars = ["Saab", "Volvo", "BMW"]; // A simple classic awesome array.

//Let's create a simple Person obj.

var person = {
    
    firstname : "John",
    lastName: "Dimitriou",
    age:34,
    eycolor: "red",
    married : false
}

console.log(person);


console.log(typeof(0)); //number
console.log(typeof(2.343452)); //number
console.log(typeof("Ioannis Dimitriou")) //string



var number;
console.log(number); //undefined i have not define a variable yet
console.log("Print an unassignement value " , typeof(number))

var name = "";
console.log(name)// "" Of course it is not undefinied because i have declared an empty String
console.log(typeof(name)) // The type of an empty String is String :) :) 



