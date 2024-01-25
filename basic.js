\console.log("Hello World!!!")

console.error("Some error occured!!!")

// Local 
let b1 = 10;  

// Globle
var b2 = 20

const = 12;

// Primitive Data Types 
// 1. Number data types 

let num1 = 123;
let num2 = 1.12;
console.log(num1,num2);
console.log(typeof(num1));
console.log(typeof(num2));


// 2. String data type 

let str1 = "Mayuresh";
let str2 = "Mayuresh1234241234321423";
console.log(str1,str2);
console.log(typeof(str1));
console.log(typeof(str2));

// 3. boolean 

// yes - true (true is reserved category)

var iscompleted = true;
var isDone = false;
console.log(typeof(iscompleted));




//4. Undefined(you didn't give name)
Let firstname;
console.log(firstname);
console.log(typesof firstname);

// undefined used as value also 

// 5. NUll

//represent nothing
// Null is data type as well as value

var accountNumber = 123;
accountNumber = Null;
console.log(accountNumber);

// Function /method declaration

function walkMethod(){

    console.log('walking...............');
    console.log('walking...............');
    console.log('walking...............');
    console.log('walking...............');
    console.log('walking...............');
    console.log('walking...............');
}

walkMethod();
walkMethod();
walkMethod();
walkMethod();
walkMethod();

function printWhateverSpecified(input1,input2){
    console.log(input1,input2)
}

//function printWhateverSpecified(){

//}

var in1 = 1;
var in2 = 2;

printWhateverSpecified(in1,in2);
printWhateverSpecified(123,456);
printWhateverSpecified(null);
printWhateverSpecified();



var person = {
    name: 'Surya',
    age: 18,
    height: 5.1,
    walk: function(){
       return 'walking';
    }
};
console.log(person);
//get
console.log(person.name);
console.log(person.height);
console.log(person.walk());
//
person.qualification = 'BE';
person.eat = function{
    return 'eating';
}
console.log(person);

// update
person.qualification = 'BCA';
person.eat = function{
    return 'updated';
}
console.log(person);
console.log(person.eat());
console.log('Age' + person.age);


//delete
delete person.age;
console.log(person);

var person1 = new Object();

person1.firstname = 123;
console.log(person1);

console.log(typeof person1, typeof person);

console.log(person["qualification"]);

person['name']

console.log(person['name']);

console.log(person.userinput);
console.log(person.['userinput']);
console.log(person.[userinput]);

userinput = 'qualification';
console.log(person[useinput]);

