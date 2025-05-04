import { AbstractComponent } from "../utils/component-helper.js";

export class InfoBlock extends AbstractComponent {
    constructor() {
        super();
        this.title = null;
        this.data = null;
    }

    initAttributes() {
        this.initAttribute("title");
        this.initAttribute("data");
    }

    isEmptyAttributtes() {
        return this.data === null || this.title === null;
    }

    toUpperFirstLetter(word) {
        return word[0].toUpperCase() + word.slice(1, word.length);
    }

    arrayToListView(items) {
        return items.map((item) => {
            return `<li>${item}</li>`
        })
    }

    render() {        
        if (this.isEmptyAttributtes()) return;

        this.innerHTML = `
            <div class="info-block__wrapper">
                <div class="basic-info">
                    <h2 class="basic-info_header">${this.title}</h2>
                    <ul class="basic-info_list">`
                        + Object.entries(this.data).map(([key, val]) => {
                            const value = (typeof val === "object")
                                ? `<ul>${this.arrayToListView(val).join("\n")}</ul>`
                                : val;
                            return `<li>${this.toUpperFirstLetter(key)}: ${value}</li>`;
                        }).join(" ")
                        + 
                    `</ul> 
                </div>
                <hr>
            </div>
        `
    }

    connectedCallback() {
        this.initAttributes()
        this.render();
    }

    static get observedAttributes() {
        return ["title", "data"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        this[name] = name === "data"
            ? JSON.parse(newValue)
            : newValue;
        this.render();
    }
}
