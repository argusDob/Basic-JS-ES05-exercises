//Functions

//Tuesday 14 of May



function showMessage(){
    var message = "My name is Ioannis Dimitriou"
    console.log(message);
}

showMessage();
//Of course if i try to print the message outside of the block i will get an error
//because i have store the var a local scope



//Outer Variables
var username = "Ioannis Dimitriou"
//variable is global scope so i have aceess from everyware

function firstFunction(){
    var message = 'Hello ' + username;
    console.log(message)
}

firstFunction();


function showMessageTwo(){
    username = "Argus";
    var message = "I am a dog and my name is:" + username;
    console.log(message);
}

console.log(username)// Ioannis Dimitriou before function calling
showMessageTwo();
console.log(username)//Argus after function excecution


function showMessageThree(){
    var username = " Argus"
    var message = "Hello " + username;
    console.log(message); //Argus
}

showMessageThree(); //Argus
console.log(username); //Ioannis Dimitriou


//IMPORTANT!!!!!!!   IT IS A GOOD CODE PRACTISE TO MINIMIZE THE GLOBAL VARIABLES 
//MODERN CODE HAS FEW OR NO GLOBAL VARIABLES

//PARAMETERS EASY STUFF

function testFunction(arg1, arg2){
    console.log(arg1 + arg2);
}

testFunction("I am function " , "and I use parameters");
testFunction("I am a function " , " and i can use as many as parameters i want")

//I am not sure that i have understand this example vary well. I would like to discuss on it
//with Chris!!
function getCopyOfValue(from, text){
    from = '@@@' + from + '@@@'
    console.log(from + ': ' + text)
}

//
var from = "Ann";
//Here i have pass the form var as parameter???
getCopyOfValue(from, "Hello");
console.log(from);


function defaultValue(from, text = "no text given"){
    console.log(from + ": " + text)
}
defaultValue("Ann");

function sum(a,b){
    return a + b;
}

var result = sum(1,2);
console.log(result)
console.log(sum(54,54))


//I would like to discuss the data flow for this function *******from here....********
//
function overAge(age){
    if(age > 18){
        return true;
    }
    else {
        return confirm("Do you have permissions from your parents?")
    }
}

var age =prompt("How old are you", 18);
if (overAge(age)){
   console.log('Access granted');
}
else{
   console.log('Access denied')
}

function showMovie(age){
    if(!overAge(age)){
        return;
    }
    else{
        console.log('Showing you the movie')
    }
}

showMovie(age);

//********To here ***********

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i);  // a prime
  }
}


//This function check for reminders. If the reninder == 0 the output is even number Otherwise is a prime number
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

showPrimes(5);



//TASKS
//Rewrite it, to perform the same, but without if, in a single line.
//
//Make two variants of checkAge:
//
//Using a question mark operator ?
//Using OR ||

//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm('Do you have your parents permission to access this page?');
//  }
//}

function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
}

checkAge(5);

/Write a function min(a,b) which returns the least of two numbers a and b.
function min(a,b){
    if(a < b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}

min(-15, -5);




function pow(x,n){
    
    if(Number.isInteger(x) && Number.isInteger(n)){
    var power = x * n
    console.log(power);
    }
    else{
        console.log("Please set only integer numbers")
    }
}

pow(2, 3)


//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. Tutorial's assignement

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported,
    use an integer greater than 0`);
} else {
  alert( pow(x, n) );
}

//these argument are called back arguments
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
