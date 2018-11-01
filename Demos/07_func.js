/*
 * Filename: /Users/satyensingh/notes/AdvancedJS/JSInternals/WS/Day1/07_func.js
 * Path: /Users/satyensingh/notes/AdvancedJS/JSInternals/WS/Day1
 * Created Date: Saturday, August 18th 2018, 1:22:56 pm
 * Author: satyensingh
 * 
 * Copyright (c) 2018 Your Company
 */

var x = "5";

function sub(a, b){
    var c = a - b;
    return c;
}

console.log(sub(200, 100));

var add = function(a, b){
    var c = a + b;
    return c;
}

console.log(add(100, 200));

console.log(add);

console.log(add.toString());

// var c = add(200,300);
// add = 5; // 
// var d = add(5,7);
// console.log(d)

add = add(400,300);//after call add() add becomes Number
console.log(add);

