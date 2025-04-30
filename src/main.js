import alpinejs from "https://cdn.skypack.dev/alpinejs" 

console.log(alpinejs);

alpinejs.data('personalInfo', () => ({
    firstName: "Anton",
    lastName: "Kazakov",
    birthday: (6, 1, 1997),
 
    get age() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear - this.birthday[2];
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}))

alpinejs.start();