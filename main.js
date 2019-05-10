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
        console.log("Something ios going total wronge")
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