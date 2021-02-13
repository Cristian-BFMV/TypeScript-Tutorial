"use strict";
/** Lesson 1: basic types */
var character = 'mario';
var age = 13;
var isBlackBelt = false;
character = 'luigi';
age = 23;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
/** Lesson 2: objects and arrays */
// Arrays
var names = ['luigi', 'mario', 'yoshi'];
var numbers = [1, 2, 3];
var mixed = [1, 'mario'];
// Objects
var ninja1 = {
    name: 'mario',
    belt: 'black',
    age: 20,
};
var ninja2 = {
    name: 'mario',
    belt: 'black',
    age: 20,
};
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 20,
};
/** Lesson 3 functions  */
var greet;
greet = function () {
    console.log('Hello, again!');
};
var add1 = function (a, b) {
    console.log(a + b);
};
add1(4, 5);
var add2 = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add2(4, 5, 12);
add2(4, 5);
var add3 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add3(4, 5, 15);
add3(4, 5);
var minus = function (a, b) {
    return a - b;
};
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greet2 = function (user) {
    console.log(user.name + " says hello");
};
/** Lesson 5 Function signatures */
var greet3;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails1;
logDetails1 = function (ninja) {
    console.log(ninja.name + " is " + ninja.age);
};
