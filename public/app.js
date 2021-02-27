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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 12] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 14] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 25] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 26] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 17] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: 'Buenas tardes',
};
const docThree = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'Cristian' },
};
const docFour = {
    uid: 3,
    resourceType: ResourceType.PERSON,
    data: ['bread', 'milk'],
};
console.log(docTwo);
console.log(docThree);
console.log(docFour);
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
const car1 = {
    direction: Direction.Right,
};
console.log(car1);
