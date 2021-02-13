/** Lesson 1: basic types */
let character: string = 'mario';
let age: number = 13;
let isBlackBelt: boolean = false;

character = 'luigi';

age = 23;

isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

/** Lesson 2: objects and arrays */

// Arrays
let names: string[] = ['luigi', 'mario', 'yoshi'];
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = [1, 'mario'];

// Objects
let ninja1: {
  name: string;
  belt: string;
  age: number;
} = {
  name: 'mario',
  belt: 'black',
  age: 20,
};

type Ninja1 = {
  name: string;
  belt: string;
  age: number;
};

let ninja2: Ninja1 = {
  name: 'mario',
  belt: 'black',
  age: 20,
};

interface Ninja2 {
  name: string;
  belt: string;
  age: number;
}

let ninja: Ninja2 = {
  name: 'mario',
  belt: 'black',
  age: 20,
};

/** Lesson 3 functions  */

let greet: Function;

greet = () => {
  console.log('Hello, again!');
};

const add1 = (a: number, b: number): void => {
  console.log(a + b);
};

add1(4, 5);

const add2 = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
};

add2(4, 5, 12);
add2(4, 5);

const add3 = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add3(4, 5, 15);
add3(4, 5);

const minus = (a: number, b: number): number => {
  return a - b;
};

/** Lesson 4 Type Aliases */

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

type User = {
  name: string;
  uid: StringOrNum;
};

const greet2 = (user: User) => {
  console.log(`${user.name} says hello`);
};

/** Lesson 5 Function signatures */

let greet3: (a: string, b: string) => void;

greet = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string): number => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

type person = {
  name: string;
  age: number;
};

let logDetails1: (obj: person) => void;

logDetails1 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age}`);
};
