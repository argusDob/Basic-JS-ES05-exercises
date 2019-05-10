let a = 2 + 2


//The switch statement start to compare (a) from the first case variant until match te nearest break

switch (a) {
    case 3:
        console.log('Too Small');
        break
    case 4:
        console.log("Exactly1");
        break
    case 5:
        console.log("Too Large");
        break;
    default:
        console.log("I dont know such values");
}
//In the case that i wont use break the execution continues from the reached point until the end of the statement

switch (a) {
    case 3:
        console.log('Too Small');

    case 4:
        console.log("Exactly");

    case 5:
        console.log("Too Large");
    default:
        console.log("I dont know such values");
}

// "1" = 1 //true
// "2" > "12" //false
let c = "1";
let b = 0;

switch (+c) {
    case b + 1:
        console.log("this runs, because +c is 1 exactly equals b+1")
        break;
    default:
        console.log("this does not run");
}


let d = 1 + 1 + 2;

switch (d) {
    case 4:
        console.log('Right')
        break;
    case 3:
    case 5:
        console.log('Wrong')
        console.log('You have to go back to school');
        break;
    default:
        console.log("Something ios going total wrong")
}


let arg = prompt("Enter a value");
switch (arg) {
    case '0':
    case '1':
        console.log(" You choose one or zero ");
        break
    case '2':
        console.log("You have choose two");
        break;
    case 3:
        console.log("Never Executes")
        break;
    default:
        console.log("an unknow Value")
}

//let arg = prompt("Enter a value");
//    switch(arg){
//        case '0':
//        case '1':
//            console.log(" You choose one or zero ");
//            break
//        case '2':
//            console.log("You have choose two");
//            break;
//        case 3:
//            console.log("Never Executes")
//            break;
//        default:
//            console.log("an unknown Value")
//        
//    }


//I had to rewrite the following statement using if/else statement

//switch (browser) {
//  case 'Edge':
//    alert( "You've got the Edge!" );
//    break;
//
//  case 'Chrome':
//  case 'Firefox':
//  case 'Safari':
//  case 'Opera':
//    alert( 'Okay we support these browsers too' );
//    break;
//
//  default:
//    alert( 'We hope that this page looks ok!' );
//}


function checkBrowser(browser) {
    if (browser == "edge") {
        console.log("Ok you have got edge")
    } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
        console.log("we support those browsers")
    } else {
        console.log("I hape that this page looks ok")
    }
}
checkBrowser("edge");


//I had to rewrite the followwing statement using if/else statement
//let a = +prompt('a?', '');
//
//if (a == 0) {
//  alert( 0 );
//}
//if (a == 1) {
//  alert( 1 );
//}
//if (a == 2 || a == 3) {
//  alert( '2,3' );
//}



let z = +prompt('a?', ''); //cast the sting in a number
switch (z) {
    case 0:
        console.log(2.1);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3')
        break;
        //    default:
        //        console.log("Please choose an other number")
        //    
}


//Conditional operators: if, '?'


let year = +prompt('a?', '');

if (year == 2015) {
    console.log('Right');
} else {
    console.log('Wrong');
}

let a;
let age = prompt("How old are you?", '')
if (age > 18) {
    a = true
} else {
    a = false
}

console.log(a);

//Conditional operator ?

//let's do a simple example

function checkAge(age) {
    let result = (age > 18) ? false : true
    console.log(result);
}

checkAge(5);

//Multiple '?'

let ageOne = prompt('age?', "Set your age");
let message = (age < 3) ? 'You are still baby' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Almost dead!' :
    'You are dead';

console.log(message);

//refactor the above the  statement if/else easy stuff

function checkIfYouAreDead() {
    let age = prompt('age?', "Set your age");
    let message;
    if (age < 3) {
        message = "You are still baby"
    } else if (age < 18) {
        message = "Hello"
    } else if (age < 100) {
        message = "You are mature"
    } else {
        message = "You cannot set you birth day because you have die"
    }
    console.log(message)
}

checkIfYouAreDead();


//

//
//Rewrite this if using the ternary operator '?':
//
//if (a + b < 4) {
//  result = 'Below';
//} else {
//  result = 'Over';
//}


function rewriteCode(arg1, arg2, ) {
    let a, b;
    let message = ((a + b) < 4) ? "Below" :
        'Over';
    console.log(message);

}

rewriteCode(1, 1);

//Rewrite 'if..else' into '?'


//function fn(){
//    let message;
//if (login == 'Employee') {
//  message = 'Hello';
//} else if (login == 'Director') {
//  message = 'Greetings';
//} else if (login == '') {
//  message = 'No login';
//} else {
//  message = '';
//}
//}


function reformatAboveCode(login) {

    let message = (login == 'Employee') ? 'Hello' :
        (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
        'lalalal';
    console.log(message);
}

reformatAboveCode('Director')
reformatAboveCode('Employee')
reformatAboveCode('');
reformatAboveCode('peace')

//Logical Operators


console.log(1 || 0);
console.log(true || 'no matter what');

console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0); //all are false so return just the last value :) :) 



// i cannot understand here why return the default user

function getTheFirstTruthyValue() {
    let currentUser = null;
    let defaultUser = 'John';
    let name = currentUser || defaultUser || "unamed"
    console.log(name);

}

function shortCircuit() {
    let x;
    true || (x = 1);
    console.log(x);
}
shortCircuit(); //Ofcourse is undefined because we have not devclare the x if the operator is
// false  || (x = 1) ==> x=1

function andOperator() {
    let hour = 12;
    let minutes 30;

    if (hour == 12 && minute == 30) { // T && T ==> T
        console.log("The time is 12.30")
    }
}

andOperator();

function andOperatorOne() {
    if (1 && 0) { // F & T ==> False
        console.log("False")
    }
}

andOperatorOne();


// if the first operand is truthy,
// AND returns the second operand:
// 0 = false 1 = true and null = false;
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0


//Write an “if” condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.

function checkAgeRange() {
    let age = prompt("Enter an age?", "")
    if (age >= 14 || age <= 90) {
        console.log("I the age range")
    } else {
        console.log("Outside of the range")
    }
}
checkAgeRange()

//What will the results of the expressions be inside if(...)?

if (-1 || 0) alert('first'); // F || F = True;
if (-1 && 0) alert('second'); // T && F = False
if (null || -1 && 1) alert('third'); // F || F || T ==>T (execute)

//Write the code which asks for a login with prompt.
//
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled.”, if it’s another string – then show “I don’t know you”.
//
//The password is checked as follows:
//
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled.”

function logIn() {
    let role = prompt("Who is there?")

    if (role == 'Admin') {
        console.log("Welcome admin")
        let password = prompt('Please set the password');
        if (password == 'TheMaster') {
            console.log('Welcome');
        } else if (password == null || password == '') {
            console.log('Please fill in the password');
        } else {
            console.log('Wrong password');
        }

    } else if (role == '' || role == null) {
        console.log("Canceled")
    } else {
        console.log("Sorry i don't know you")
    }
}
logIn();
