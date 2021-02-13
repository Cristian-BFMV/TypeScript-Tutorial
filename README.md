# TypeScript Tutorial

## Basic Types

TypeScript nos ofrece una serie de tipos básicos para tipar las variables de nuestro código, entre las que se encuentran string, number y boolean. Para tipar las variables se utiliza los dos puntos(:) y el tipo de la varible, de la siguiente forma:

```ts
let character: string = 'mario';
let age: number = 23;
let isBlackBelt: boolean = true;
```

Nota: Una vez definidos los tipos de las variables, no podemos intentar asignar una valor de un tipo diferente a estas variables. Por otra parte, TypeScript infiere el tipo de las variables basandose en el valor asignado a estas, por lo que no es estrictamente necesario tipar explicitamente las variables.

## Function's parameters types

TypeScript nos permite tipar los parámetros que una función recibe. Esto nos permitir asegurar que la función reciba siempre el tipo correcto, esta validación se realiza en tiempo de compilación y no en tiempo de ejecución, sin embargo, esta validación nos ayuda a evitar errores en tiempo de ejecución.

```ts
const circ = (diameter: number) => {
  return diameter * Math.PI;
};
```

## Object and array types

### Arrays

TypeScript nos permite tipar los valores de los elementos que conforman a un arreglo, por otra parte, al igual que en el caso de las variables TypeScript infiere el tipo dependiendo del tipo de los elementos dentro del arreglo o se puede definir explicitamente.

```ts
let names: string[] = ['mario', 'luigi', 'yoshi'];
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = [1, 'mario'];
```

Nota: Una vez definido el tipo de los elementos dentro del arreglo, no se puede añadir un elemento de tipo diferente al definido.

Nota 2: El tipado del último arreglo se denomina union type y hace referencia a que el arreglo puede contener elementos de tipo string y de tipo number.

### Objects

En cuanto a los objetos, TypeScript nos permite tipar todos los atributos dentro del objeto, y una vez los tipos de estos atribtuos esten definidos, no es posible modificar el tipo de estos, adicionalmente una vez definidos los atributos dentro del objeto no es posible añadir un nuevo atributo al objeto.

```ts
let ninja: {
  name: string;
  belt: string;
  age: number;
} = {
  name: 'mario',
  belt: 'black',
  age: 20,
};

type Ninja = {
  name: string;
  belt: string;
  age: number;
};

let ninja: Ninja = {
  name: 'mario',
  belt: 'black',
  age: 20,
};

interface Ninja {
  name: string;
  belt: string;
  age: number;
}

let ninja: Ninja = {
  name: 'mario',
  belt: 'black',
  age: 20,
};
```

Nota: En el anterior bloque de código se pueden ver todas las formas que tiene TypeScript para tipar un objeto.

## tsconfig.json

Este archivo nos sirve para configurar una serie de opciones para que el compilador de TypeScript funcione como nosotros deseemos. Entre las opciones se encuentra el **target** que hace referencia a la versión de Ecma Script a la cual TypeScript compilara. La opción **rootDir** nos sirve para que el compilador de TypeScript compile los archivos de TypeScript de ese directorio, y la opción **outDir** indica en que directorio guardará la versión compilada de esos archivos.

Finalmente, para crear este archivo se debe ejecutar el comando **tsc --init**

## Functions

TypeScript nos permite tipar variables como funciones para poder definir los tipos de los parámetros y el tipo de retorno de la función.

```ts
let greet: Function;

greet = () => {
  console.log('Hello, again!');
};

const add = (a: number, b: number): void => {
  console.log(a + b);
};
```

Adicionalmente, TypeScript nos brinda la opción de definir parámetros opcionales y/o parámetros que puedan tener varios tipos(union type). Lo primero se realiza a través del signo ?(opción 1) en el nombre del parámetro que queremos que sea opcional o usando un valor por defecto(opción 2) para el parámetro, por otra parte, lo segundo se realiza a través del tipado de ese parámetro haciendo uso de la sintaxis definida para los union types

```ts
// Opción 1
const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
};

// Opción 2
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};
```

Como se mencionó anteriormente, TypeScript nos permite determinar el tipo de retorno de las funciones que definamos.

```ts
const minus = (a: number, b: number): number => {
  return a - b;
};
```

## Type Aliases

Los type aliases nos permite abstraer tipos de datos muy complejos, como por ejemplo los type unions u objetos que tengan varias propiedades. Estos type aliases los podemos usar para tipar variables y/o parámetros en funciones, por otro lado, los type aliases nos evitan repetir código innecesariamente.

```ts
type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

type User = {
  name: string;
  uid: StringOrNum;
};

const greet = (user: User) => {
  console.log(`${user.name} says hello`);
};
```

## Function signatures

Esta caracteristica de TypeScript nos permite establecer la estructura(parámetros y tipo de retorno) que debe seguir una función.

```ts
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
```

## DOM manipulation

Al igual que JavaScript, TypeScript permite manipular el DOM dinámicamente, tenemos acceso a los querySelectos, event listeners, etc.
