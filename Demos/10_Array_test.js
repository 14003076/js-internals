var fruits = ['Apple', 'Banana'];

//Get the length of an array
console.log("Length: "+fruits.length);

//get the element at 0 index
var first = fruits[0];// Apple
console.log("first: "+first);

//get the element at the last position
var last = fruits[fruits.length - 1];// Banana
console.log("last: "+last);

//iterate over an array and print each element with their offset/position
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

//Add an element at the end of an array
var newLength = fruits.push('Orange');
console.log("newLength: "+newLength);

//Remove the last element from the array
var last = fruits.pop();
console.log("last: "+ last);

//Remove the first element
var first = fruits.shift(); // remove Apple from the front
console.log("first: "+first);

//Add element in the first position
var newLength = fruits.unshift('Strawberry');
console.log("newLength: "+ newLength);

//Get the index of a specific element
var pos = fruits.indexOf('Banana');
console.log("fruits: "+fruits);

//remove the element starting from "pos" offset and remove "n" number of elements
var pos = 1;
var n = 1;
var removedItem = fruits.splice(pos, 1);
console.log("removedItem: "+removedItem);

console.log(fruits);
