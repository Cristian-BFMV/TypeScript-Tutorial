export class ListTempate {
    constructor(constainer) {
        this.constainer = constainer;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.constainer.prepend(li);
        }
        else {
            this.constainer.append(li);
        }
    }
}
