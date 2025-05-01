import alpinejs from "https://cdn.skypack.dev/alpinejs" 
import { InfoBlock } from "./components/info-block.js";

alpinejs.data('personalInfo', () => ({
    firstName: "Anton",
    lastName: "Kazakov",
    birthday: [6, 1, 1997],
    race: "Human",
    sex: "Sexy",

    programming: ["Nodejs", "TypeScript", "Angular", "React", "Functional Programming"],
    admin: ["Linux", "Docker"],

    get baseInfo() {
        return JSON.stringify({
            race: this.race,
            sex: this.sex,
            age: this.age,
        });
    },
 
    get age() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        console.log(this.birthday);
        return currentYear - this.birthday[2];
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}))

customElements.define("info-block", InfoBlock);
alpinejs.start();