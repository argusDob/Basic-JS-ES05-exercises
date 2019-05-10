let a = 2+2


//The switch statement start to compare (a) from the first case variant until match te nearest break

switch(a){
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
//In the case that i wont use breaj the execution continues from the reached point untill the end of the statement

switch(a){
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

switch(+c) {
    case b + 1:
        console.log("this runs, because +c is 1 exactly equals b+1")
        break;
    default:
        console.log("this does not run");
}


let d= 1 + 1 + 2;

switch(d){
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
    switch(arg){
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


 function checkBrowser(browser){
     if(browser == "edge" ){
         console.log("Ok you have got edge")
     }
     else if(browser == "Chrome"  || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
         console.log("we support those browsers")
         }
     else{
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
switch(z){
    case 0 : 
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

if(year == 2015 ){
    console.log('Right');
}
else{
    console.log('Wrong');
}

let a;
let age = prompt("How old are you?", '')
if(age > 18){
    a = true
}
else{
    a = false
}

console.log(a);

//Conditional operator ?

//let's do a simple example

function  checkAge(age){
let result = (age > 18) ? false : true
console.log(result);
}

checkAge(5);
         
//Multiple '?'
         
let ageOne = prompt('age?', "Set your age");
let message = (age < 3) ? 'You are still baby':
(age < 18) ? 'Hello!' : 
(age < 100) ? 'Almost dead!' : 
'You are dead';

console.log(message);

//refactor the above the  statement if/else easy stuff

function checkIfYouAreDead(){
    let age = prompt('age?', "Set your age"); 
    let message;
    if(age < 3){
        message = "You are still baby"
        }
    else if(age < 18){
        message = "Hello"
        }
    else if(age < 100){
        message = "You are mature"
    }
    else {
        message = "You cannot set you birth day because you have die"
    }
    console.log(message)
}

checkIfYouAreDead();





