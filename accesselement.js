var obj = { 
    name: 'Mayuresh',
    qualification: 'Degree',
    age: 24
};

obj.name = 'Mansi';
obj.favoriteColor = 'Blue';

console.log(obj);

// getElementById

var divElement = document.getElementById("my-div-id");
console.log(divElement);
console.log(divElement.innerHTML);
divElement.innerHTML = 'Heading has been changed';

var divElement = document.getElementById('my-div-id1');
divElement.textcontent = 'Text content property';

var divElement = document.getElementById('my-div-id2');
divElement.textcontent = '<h1>Heading 3 - updated</h1>';

var divElement = document.getElementById('my-div-id3');
divElement.textcontent = '<h1>Heading 4 - updated</h1>';


