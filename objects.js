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


