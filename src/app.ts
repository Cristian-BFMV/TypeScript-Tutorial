// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

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

const invOne = new Invoice('mario', 'Work on the mario website', 250);
const invTwo = new Invoice('luigi', 'Work on the luigi website', 350);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount);
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
