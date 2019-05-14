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
