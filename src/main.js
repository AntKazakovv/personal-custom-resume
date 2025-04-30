import alpinejs from "https://cdn.skypack.dev/alpinejs" 


alpinejs.data('personalInfo', () => ({
    firstName: "Anton",
    lastName: "Kazakov",
    birthday: [6, 1, 1997],
    race: "Human",
    sex: "Sexy",
    
 
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

alpinejs.start();