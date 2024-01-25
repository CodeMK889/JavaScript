
//data type
// It will not hold aany specific data
// data structure where we canstore multiple values
// we can store number, string, object, booleaan, null, undefined
// it can store both homogeneous and heterogeneous data

var arr= [];

 arr = [123, 456, 789];
 arr = [true, null, undefined, {name: 'san', age: 16,} [123, 456]];

 // shift
 // remove from starting

 arr = [1,2,3];
 arr.shift();
console.log(arr);

arr = ['san','mul','sachin','kohli'];
console.log(arr.indexOf('kohli'));

console.log(arr.indexOf('Bhavya'));

// id element found - do some operations -> > -1

// if element not found do some operation -> === -1

//includes
arr = ['san','mul','sachin','kohli'];
console.log(arr.includes('kohli')); //true

console.log(arr.includes('Bhavya'));    //false

// ex: if element found -> operation is say it is found otherwise not
// ex: if element found -> operation is replace the value with kavya





//join

var a1 = 'str1,str2,str3';
console.log(a1.split(','));

var a2 = [1,'2wdedfe',true];
console.log(a2.join("_"));

//reverse()
arr = ['san','mul','sachin','kohli'];
console.log(arr.reverse());

// ex : requirement reverse a string
var str123 = 'Mayuresh';
console.log(str123.split(''));
console.log(str123.split('').reverse());
console.log(str123.split('').reverse().join(''));

// ex : reverse each words in string
str123 = 'This is a sentence';
console.log(str123.split(' ').reverse().join(' '));


//slice 
// is same as string
// modify the original Arrayit will just extract info 
// it will just extract info

arr = [1,2,3, 4];
console.log(arr.slice(2)); // 2nd index till end

console.log(arr.slice(2,3)); //3

console.log(arr.slice(2, 6 ));

console.log(arr);

//splice
//and or remove elements / and and replace elements
// modify the original array

// remove 
// splice(startIndex, numberofcharactersTobedealted)

arr = [1,2,33,4,5];
console.log("Spliec operation" + arr.splice(1,3));
console.log("original array" + arr);



arr = [1,2,33,4,5];
console.log("Spliec operation" + arr.splice(1,1));
console.log("original array" + arr);

// ex : requirement to delete 33 from array
arr = [1,2, 33,4, 5];
var index = arr.indexOf(33);
arr.splice(index, 1);
console.log("ofiginal array" + arr);

//add

arr = [1,2, 33,4, 5];
var index = arr.indexOf(33);
arr.splice(index, 0, 66, 77, 78);
console.log("ofiginal array" + arr);


// replace

arr = [1,2, 33,4, 5];
// var index = arr.indexOf(33);
arr.splice(2, 2, 66, 77);
console.log("ofiginal array" + arr);


//Day 10 ExcelR
console.log("Operation - From bank send Rs. 1000")


var seith='asnumber';

switch(seith) {

    case 'ad':
        console.log("wtyoer");
        break;
    case 'jkdf':
        console.log('ldjfl');
        break;
    default:
        console.log('lkfdsjalfj');
        break;


}

