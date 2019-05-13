//Operators
//Monday 13-05


var x = 1;
x = -x
console.log(x); // The value x became (-x)=-1

var x = 1, y = 3;
console.log(y - x); //2

var str = "My name is " + "Ioannis";
console.log(str);


console.log('1' + 2)// "12"
console.log(2 + "1")//"21"
console.log(2 + 2 + '1')//"41"
console.log(2 - '1')// 1
console.log('6' / '2')// 3


var x = 1;
console.log(+x)//1

var y = -2;
console.log(+y)//-2

console.log(+true)//1
console.log(+false)//0

var apples = "2"
var oranges = "3"

console.log("the binary plus concatenates strings: " + apples + oranges);

//What is the differce here?
console.log(+apples + +oranges); //between this
var m =Number(apples);
var n =Number(oranges);
console.log(m + n) //and this

//

var test = 2 * 2 + 1
console.log(test)// Simple mathematics the calculation become with priorities




var l, k, j;
l = k = j = 2 + 2
console.log(l) //4
console.log(k)//4
console.log(j)//4

var a = 1;
var b = 2;

var c = 3 - (a = b + 1);
console.log(a); //3 -(a= 3) output a=3
console.log(c);  // 3-3=0 output = 0


//Modulo

console.log( 5 % 2 ); // the remainde is 1
console.log( 8 % 3 ); //the remainder is 2
console.log( 6 % 3 ); // the remainder is 0 of course

//Exponentiation() Just basic maths

console.log(2 ** 2); // 2^2 2*2
console.log(2 ** 3);// 2^3 2*2*2
console.log(2 ** 4);// 2^4 2* 2* 2 * 2


//Continue with simple thinks...


var counter = 2
counter++;
console.log(counter); //3

var counterTwo = 3
counterTwo--;
console.log(counterTwo) //2


//Modify in place


var n = 2;
n +=5 // n = n +5  5 + 2 =7
console.log(n);
n *=2 // n = n * 2 7 * 2 = 14
console.log(m);

var n =2
n *= 3 + 5 // n = 2 ( 3 + 5)
console.log(n) //16


// Tasks 
//Guess the Output


var a = 1, b = 1

var c = ++a; //2
var d = b++; //1


//What are the values of a and x after the code below?
var a = 2;
var x = 1 + (a *= 2);

console.log(a); // a = a * 2 =4
console.log(x);// 5





