"use strict";
/** Lesson 1: basic types */
let character = 'mario';
let age = 13;
let isBlackBelt = false;
character = 'luigi';
age = 23;
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
/** Lesson 2: objects and arrays */
// Arrays
let names = ['luigi', 'mario', 'yoshi'];
let numbers = [1, 2, 3];
let mixed = [1, 'mario'];
// Objects
let ninja1 = {
    name: 'mario',
    belt: 'black',
    age: 20,
};
let ninja2 = {
    name: 'mario',
    belt: 'black',
    age: 20,
};
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 20,
};
/** Lesson 3 functions  */
let greet;
greet = () => {
    console.log('Hello, again!');
};
const add1 = (a, b) => {
    console.log(a + b);
};
add1(4, 5);
const add2 = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add2(4, 5, 12);
add2(4, 5);
const add3 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add3(4, 5, 15);
add3(4, 5);
const minus = (a, b) => {
    return a - b;
};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
/** Lesson 5 Function signatures */
let greet3;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails1;
logDetails1 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
