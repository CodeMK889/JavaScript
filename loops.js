// for 

// starting variable initialization i = 1 starting poimt
// i++ - every time hlow it should be incremented
// conditional check - for loop will be executed till taht condition met
// if condition fails it will stop the execution

for(var i = 1;i <= 10  ; i++ )
{
    console.log("Number is "+ i);
}

i = 1; condition ? 1<=10 - true - number is 1
// increment will happen based on last condition i =i + 1 i = 2
// i =2 ; condition ? 2<= 10 - true - number is 2 
// ....
// i = 11 ; condition ? 11<=10 - false - terminate

// i++ // increment




// i += 2  increment by 2 

for(var i = 1;i <= 10  ; i+=2 )
{
    console.log("Number is "+ i);
}


// for loop run for specific number of times based on condition
// while loop run as long as condition is true

// while
// first check and do the operation in while loop
var i = 1;
while(i<=10)
{
    console.log("Number is "+i);
    i++;
}

// do while
// first do the operation and then check
var i = 1;
do {
    console.log("Number is "+i);
    i++;
}while(i <= 10);


// for in 
var student = {
    name: "Sachin",
    age: 16,
    qualification: "Engineering",
    location: "Bengaluru"
};
for(var prop in student){
    console.log(prop + " : " + student[prop]);
}



// for of
var arr = [55,66,122,455]
for(var elemet of arr)
{
    console.log(element)
}


console.log("index");
for(i=0;i < arr.length-1;i++){
    console.log(arr[i]);
}

