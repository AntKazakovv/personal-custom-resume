export class AbstractComponent extends HTMLElement {
    constructor() {
        super();
    }

    initAttribute(attr) {
        if (this.hasAttribute(attr))
            this[attr] = this.getAttribute(attr); 
    }


}