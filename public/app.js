// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'Work on the mario website', 250);
const invTwo = new Invoice('luigi', 'Work on the luigi website', 350);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
