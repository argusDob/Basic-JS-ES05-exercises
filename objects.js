//Wednesday 15/05

var user ={
     name : "Ioannis",
     age : 30,
     isAdmin: true,
     "likes OSX" : true
    
}
console.log(user);
console.log(user);
//console.log(user[age]) //why this doesnot work?
//console.log(user.age)


var key = prompt("what is the user name?", "");
console.log(user[key]);

var fruit = "Tangerine";
var bag = {
    
    [fruit + 'Computers']: 5,
};

console.log(bag[fruit]); //WHY IS UNDEFIIIIINEEEEEED :( )


//Check if an obj contains keys
var user = {}

console.log(user.noSuchProperty); //true does not contain properties The user obj is empty.

//Check if an obj contains keys with in operator
var user = { name: "John", age: 30 };

console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, us


// for in loop

var user = {
    name: "Ioannis",
    age: 30,
    isAdmin: true,
    "print the key": "i am a value"
};

for(var key in user){
    console.log(key)
//    console.log(user[key]);
    
}

// Ordered like an object
var codes = {
    "49": "Germany",
    "31": "Netherlands",
    "30": "Greece",
    "1":  "USA"    
    
}

for(var code in codes){
    console.log(code);
}

//Const object
//*********************Further explanation********************
const user = {
  name: "John"
};

user.age = 25; // (*)
user.name = "Maria"   //CHRIS IS IT NORMAL THAT I CAN CHANGE THE PROPERTY?
console.log(user.name); // 
var admin = user;

// The user has a const var so should not be change- Right?????
admin.name= "Argus";
console.log(admin.name)
//******************************************************************

//TASKS
//
//Create an empty object user.
//Add the property name with the value John.
//Add the property surname with the value Smith.
//Change the value of the name to Pete.
//Remove the property name from the object.


var user= {
    name: "ioannis",
    surname: "dimitriou"
}

user.name = "Argus"
console.log(user);
delete user.name;
console.log(user)

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


function isEmpty(obj){
    for (let in obj){
    return false;
    }
    return true;
}


var schedule = {}
var user = {name: "Ioannis"};

isEmpty(schedule);
isEmpty(user);

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
var salaries = {
    John: 100,
    Ann: 50,
    Ioannis: 1200
}
var sum = 0
for (var key in salaries){
    sum += salaries[key];
}
console.log(sum);

//Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

var menu = {
    width: 200,
    heigh: 300,
    //    title: "My menu"
}


console.log(typeof menu.width); //number

function multiplyNumeric(obj) {
    var res;
    var message;
    for (var key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }

    }

}

multiplyNumeric(menu);
console.log(menu)
//
////Output
//var menu{
//    width:400,
//    height:600
//}

