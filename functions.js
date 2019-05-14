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
