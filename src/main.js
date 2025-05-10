import alpinejs from "https://cdn.skypack.dev/alpinejs" 
import { InfoBlock } from "./components/info-block.js";

alpinejs.data('personalInfo', () => ({
    firstName: "Anton",
    lastName: "Kazakov",
    birthday: [6, 1, 1997],
    race: "Human",
    sex: "Sexy",
    placeOfResidence: "World",

    programming: ["Nodejs", "TypeScript", "Angular", "React", "Functional Programming"],
    admin: ["Linux", "Docker"],
    art: ["Lomography", "3D modeling"],

    get baseInfo() {
        return JSON.stringify({
            race: this.race,
            sex: this.sex,
            age: this.age,
            placeOfResidence: this.placeOfResidence,
        });
    },

    get skilsInfo() {
        return JSON.stringify({
            programming: this.programming,
            admin: this.admin,
            art: this.art,
        });
    },
 
    get age() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.birthday[2];
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}))

customElements.define("info-block", InfoBlock);
alpinejs.start();
