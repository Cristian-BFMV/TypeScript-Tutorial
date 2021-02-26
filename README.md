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

Al igual que JavaScript, TypeScript permite manipular el DOM dinámicamente, tenemos acceso a los querySelectors, event listeners, etc.

### querySelector

La función querySelector nos permite obtener uno o varios elementos del DOM a través de un identificador. En TypeScript esta función nos puede devolver cosas un HTMLElement o null, esto es debido a que TypeScript no "sabe" si el elemento que queremos obtener existe en el DOM o no por lo que si este elemento no existe nos devuelve null y en caso de que sí exista nos devolvera el HTMLElement. Esto último puede generar un problema en nuestro código porque TypeScript detecta que podemos hacer referencia a un objeto nulo, por lo que es necesario encargarnos de esta situación en nuestro código, TypeScript nos ofrece distintas posibilidades para manejar esto, la primera de estas es:

```ts
const anchor = document.querySelector('a');

if (anchor) {
  console.log(anchor.href);
}
```

En este caso nos aseguramos que el valor de anchor no sea nulo a través de la sentencia if. La segunda opción es la siguiente:

```ts
const anchor = document.querySelector('a')!;

console.log(anchor.href);
```

En la anterior opción hacemos uso del signo !, esto le indica a TypeScript que nosotros como desarrolladores tenemos certeza que el objeto al cual deseamos acceder existe en el DOM, por lo que esta operación siempre nos devolvera un HTMLElement y no un valor nulo. La última opción es decirle a TypeScript el tipo(type casting) especifico que nos devolvera la función querySelector, de la siguiente forma.

```ts
const anchor = document.querySelector('a') as HTMLAnchorElement;

console.log(anchor.href);
```

TypeScript nos ofrece la posibilidad de tipar todo los tipos de elementos de HTML, en la siguiente referencia podemos observar todos los [tipos que TypeScript tiene](https://support.west-wind.com)

### Event listeners

Los event listeners funcionan de la misma forma que en JavaScript en el que le pasamos el tipo de evento y un callback que sera la "encargada" de manejar ese evento, sin embargo, en TypeScrip tenemos la opción de tipar el parámetro del evento en el callback de la siguiente forma.

```ts
const form = document.querySelector('.new-item-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
```

## Classes

Las clases en TypeScript funcionan exactamente igual que en JavaScript, con la diferencia que podremos aplicar todas las caracteristicas de tipado de TyepScript en nuestra clase.

```ts
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

Las clases en TypeScript también nos permite tipar arreglos con la clase creada, por lo que todos los elementos de ese Array tendran que ser instancias de esa clase.

```ts
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
```

## Access modifiers

Los modificadores de acceso indican el cómo se accede a las propiedades dentro de una clase, estos modificadores son el public(modificador por defecto), el private y el readonly.

### public

Este modificador de acceso es el que se da por defecto en todas las propiedades que como desarrollador creamos en nuestras clases, por lo que no es necesario colocar explicitamente este modificador, sin embargo, si queremos se explicitos sobre este modificador podremos hacerlo de la siguiente forma.

```ts
class Invoice {
  public client: string;
  public details: string;
  public amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

Este modificador indica que en cualquier lugar dentro de nuestro código podremos acceder de la forma en que deseemos a estas propiedas e incluso podremos modificar su valor.

### private

Este modificador nos permite "controlar" el cómo desde otros lugares de nuestro código se accede a las propiedades de la clase, esto restringiendo todo el acceso directo a estas propiedades y haciendolas solo disponibles a través de funciones que definamos dentro de nuestra clase.

```ts
class Invoice {
  private client: string;
  private details: string;
  private amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

### readonly

Este modificador hace que las propiedades dentro de nuestra clase solo tengan la opción de lectura y no de modificación, esto aplica tanto para el código fuera de nuestra clase como para el código dentro de nuestra clase.

```ts
class Invoice {
  readonly client: string;
  readonly details: string;
  readonly amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

Mediante estos modificadores de acceso, TypeScript nos ofrece otra forma de definir las propiedades en el constructor de nuestra clase:

```ts
class Invoice {
  constructor(readonly client: string, private details: string, public amount: number) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

De esta forma no debemos definir las propiedades de forma explicita en nuestra clase y después asignar los valores en el constructor, si no que TypeScript automaticamente define estos valores como propiedades dentro de nuestra clase. Para esta funcionalidad es imprescindible el uso de los modificadores de acceso en el constructor.

## Modules

Para trabajar con los modulos de ES moderno, debemos modificar dos opciones dentro de el archivo de configuración de TypeScript, estas opciones son:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015"
  }
}
```

Adicionalmente, en el archivo de html de nuestra carpeta public, debemos especificar que el archivo de JavaScript al cual compila TypeScript es de tipo module, esto lo hacemos de la siguiente forma

```html
<script type="module" src="app.js"></script>
```

El uso de los modulos en TypeScript es exactamente igual al que se tiene en JavaScript moderno, en el cual exportamos desde un modulo lo que deseemos usar en otro modulo mediante los imports.

classes/Invoice.ts

```ts
export class Invoice {
  constructor(readonly client: string, private details: string, public amount: number) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```

app.ts

```ts
import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'Work on the mario website', 250);
const invTwo = new Invoice('luigi', 'Work on the luigi website', 350);
```
