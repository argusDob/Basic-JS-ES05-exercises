//Type Conversions
//Monday 13/05



//Convert a boolean value --> String value

var value = true;
console.log(typeof(value)); //boolean


//What is teh differce between toString() and String()? Both of the function are responsible to convert a value witj a type:Something to String.

//Reddit has the aswer: The big one is for toString() a value has to exist. With String(), you can use it on values that are undefined or null. Attempting a toString() from an undefined or null value will produce an error. String will often call an object's toString() anyway, so its a safer way of doing that.

value = String(value);
console.log("The boolean became: " ,typeof(value));

console.log("The result is: ", "6" / 2); //Js do the job and convert the String to an number


//Convert a String to an INT number();
var str = "1223"
console.log(typeof(str));
var str1= Number(str);
console.log(typeof(str1));


// Let's try to convert a String to number..I expect a NAN but the tutorial require it :P :P

var smth = Number("Yofqwrfqewfeqwf");
console.log(typeof(smth)); //???????  Why the type is number? I expect for an error..
console.log(smth);

console.log( Number("   123   ") ); //123
console.log( Number("123z") );  //NAN     
console.log( Number(true) );   //true == 1    
console.log( Number(false) );  //false == 0     

console.log( 1 + '2' );  // 12
console.log( '1' + 2 ); //12 

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true

console.log(Boolean("Hello")); //It is True because the string is empty
console.log(Boolean(""));  //Return false because The String is empty. The same is if the value is null,undefined or NAN

console.log(Boolean("0")); // True
console.log(Boolean(" ")); //True There is a space so the JS count it as non empty String and return a true.


//Tasks

//What are the results of these expressions?

console.log(" " + 1 + 0) // Output: ""+1
console.log(" " -1 + 0)// ""-1
console.log(true + false)
