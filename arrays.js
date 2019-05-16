
//Thursday 16/05



//*****************************Arrays**********************************


//An array can store elements of any type


var arr = ['Apple', {name: 'ioannis'}, true, function(){console.log('Hello')}];

for(var i=0; i<arr.length; i++){
    console.log(arr);
}


 var fruits = ["apple", "orange", "tangerine"];
console.log(fruits.pop()); //remove the last element of the list
console.log(fruits);

//push a new element in the array
var fruits = ["apple", "orange", "tangerine"];
fruits.push("Cherrys")
console.log(fruits);
//remove the first element
var fruits = ["apple", "orange", "tangerine"];
console.log(fruits.shift()); //apple

 var fruits = ["apple", "orange", "tangerine"]
 console.log(fruits.unshift('Apple'))//insert an element in the first position of the array
console.log(fruits);


 var fruits = ["apple", "orange", "tangerine"]
 console.log(fruits.unshift('Apple'))//insert an element in the first position of the array
console.log(fruits);

//Let’s try 5 array operations.
//
//Create an array styles with items “Jazz” and “Blues”.
//Append “Rock-n-Roll” to the end.
//Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//Strip off the first value of the array and show it.
//Prepend Rap and Reggae to the array.


var array = ['jazz','blues'];
array.push('Rock n roll');
console.log(array);
console.log(array.length);
array[Math.floor((array.length - 1) / 2)] = "Classics";
console.log(array);

//*****************************Arrays**********************************

//Write the function sumInput() that:
//
//Asks the user for values using prompt and stores the values in the array.
//Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//Calculates and returns the sum of array items.
//P.S. A zero 0 is a valid number, please don’t stop the input on zero.


function sum(){
    var myarr = [];
    var sum = 0;
    while(true){
    var value =prompt("Please insert a value : ", 0);
    if(value === '' || value === null){
        break;
    }
    else{
        tonumb = Number(value);
        myarr.push(tonumb);
        console.log(myarr);
        for(var i=0; i<myarr.length; i++){
             sum = sum + myarr[i];
        }
        
        console.log(sum);
    }
    }
}


sum();


let map = new Map();
map.set(1, 'str');
map.set('1', 'num1');
map.set(true, 'bool1');


console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));
console.log(map.size);

//Map also use objects as keys :o :o
var ioan = {name: "ioannis"};
var checkMap = new Map();
 checkMap.set(ioan, 2632830);

console.log(checkMap.get(ioan));
console.log(checkMap);






