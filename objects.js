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







