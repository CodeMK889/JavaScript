// Strings

var str1 = 'Sachin';
var str2 = "sachin";


var str3 = 'I\'ii get back to you';
console.log(str3);


var firstname = 'Mayuresh';
var middlename = 'K';
var lastname = 'K';

var fullname = firstname+ " " +middlename+ " " +lastname;
console.log(fullname)
console.log(123+'Mayuresh');
console.log(typeof(123 +'Mayuresh'));
console.log(true + 'Mayuresh');
console.log(null + 'Mayuresh');
console.log(undefined + 'Mayuresh');

// String Comparision

var str1 = 'hello';
var str2 = 'hello';

console.log(str1 == str2);


var str1 = 'hello';
var str2 = 'hellow';

console.log(str1 == str2);


var str1 = 'Hello';
var str2 = 'hello';

console.log(str1 == str2);

str1 = '123';
str2 = 123;

console.log(str1 == str2); 

// charAt

str1 = 'Hello World';
console.log(str1.charAt(0));
console.log(str1.charAt(7));
console.log("console log" + str1.charAt(10000));
console.log(str1[0]);
str1[0] = 'b';
console.log(str1);
console.log(str1[-1]);

//toLowerCase
str1 = 'Hello World';
console.log(str1.toLowerCase());


// toUpperCase
str1="Hello world";
console.log(str1.toUpperCase());

//Slice

str1 = "Hello World";
console.log(str1.slice(6));

// negative index       -1 to -n

// positive index       0 to n-1

// slicing direction extracting values would always happen left to right

console.log(str1.slice(-2));
console.log(str1.slice(6,9));

// substring
// negative indexing is not possible

console.log(str1.substring(6));
console.log(str1.substring(-2));
console.log(str1.substring(6,9));

//replace

str1='Hello World';
console.log(str1.replace("Hello", "Hi"));

str1 = 'Hello world. Hello Js. Hello Js';
console.log(str1.replaceAll("Hello" , "Hi"));

// trim

var userName = "    Mayuresh Kudaaskar      ";
console.log(useName.trim());

//concat

str1 = "Hello";
str2 = "world";
console.log(str1.concat(str2));

// length

str1 = "hello world";
console.log(str.length);
var n = str1.length;
console.log(str1[n-1]);

// substr

str1 = "Hello World";
console.log(str1.substr(8));

console.log(str1.substr(2,5));

console.log(str.substring(2,5));

    


