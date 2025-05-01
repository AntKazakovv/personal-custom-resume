import { AbstractComponent } from "../utils/component-helper.js";

 
export class InfoBlock extends AbstractComponent {
    constructor() {
        super();
        this.title = null;
        this.listOfData = null;
    }

    initAttributes() {
        this.initAttribute("title");
        this.initAttribute("listOfData");
    }

    render() {
        this.innerHTML = `
            <div class="info-block__wrapper">
                <div class="basic-info">
                    <h2 class="basic-info_header">${this.title}</h2>
                    <ul class="basic-info_list">`
                        + Object.entries(this.listOfData).map(([key, value]) => `<li>${key}: ${value}</li>`).join(" ") +
                    `</ul> 
                </div>
                <hr>
            </div>
        `
    }

    connectedCallback() {
        this.initAttribute()
        this.render();
    }
}
