import { Invoice } from './classes/Invoice.js';
import { ListTempate } from './classes/ListTemplete.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTempate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 23 });
console.log(docOne);
const docTwo = {
    uid: 1,
    resourceName: 'person',
    data: 'Buenas tardes',
};
const docThree = {
    uid: 2,
    resourceName: 'person 2',
    data: { name: 'Cristian' },
};
const docFour = {
    uid: 3,
    resourceName: "shopping list",
    data: ["bread", "milk"]
};
