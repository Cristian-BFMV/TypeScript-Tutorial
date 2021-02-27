import { Invoice } from './classes/Invoice.js';
import { ListTempate } from './classes/ListTemplete.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTempate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 23 });

console.log(docOne);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'Buenas tardes',
};

const docThree: Resource<object> = {
  uid: 2,
  resourceName: 'person 2',
  data: { name: 'Cristian' },
};

const docFour: Resource<string[]> = {
  uid: 3,
  resourceName: "shopping list",
  data: ["bread", "milk"]
}
