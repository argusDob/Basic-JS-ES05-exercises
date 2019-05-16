
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


