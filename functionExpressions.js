//FUNCTIOn EXPRESSIONS
//TUESDAY 14/05


//these argument are called back arguments
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}


//call back for the yes answer
function showOk() {
  console.log( "You agreed." );
}
//call back for the no answer
function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


//Write the above code using Function Expression

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}


// I created  thwo functions without names.It is impossible to get access of the functions outside of ask();
ask(
"Do you agree?"
function() { console.log('You agreed,')},
function() {console.log('You cancel the execution')}

)


sayHiOne("Ioannis"); // Hello, John

function sayHiOne(name) {
  console.log( `Hello, ${name}` );
}



 // error!
//Uncaught ReferenceError: Cannot access 'sayHi' before initialization
//Return a reference error because I call the function before the n initalization
var sayHi = function(name) {  // (*) no magic any more
  console.log( `Hello, ${name}` );
};


var age = 12;

if(age < 16){
    welcome();
    function welcome(){
        console.log("Hello World");
    }
}

//welcome(); I will get an error because the welcome is accessible inside the block and not outside;



