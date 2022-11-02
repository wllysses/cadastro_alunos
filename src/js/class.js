class Student {
    //attributes
    name;
    registration;
    note1;
    note2;
    note3;

    //method constructor
    constructor(name, registration, note1, note2, note3) {
        this.name = name;
        this.registration = registration;
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
    }

    //methods getters/setters
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getRegistration() {
        return this.registration;
    }

    setRegistration(registration) {
        this.registration = registration;
    }

    getNote1() {
        return this.note1;
    }

    setNote1(note1) {
        this.note1 = note1;
    }

    getNote2() {
        return this.note2;
    }

    setNote2(note2) {
        this.note2 = note2;
    }

    getNote3() {
        return this.note3;
    }

    setNote3(note3) {
        this.note3 = note3
    }

    //action methods
    calculateAverage() {
        return ((this.note1 + this.note2 + this.note3) / 3).toFixed(1)
    }
}

export { Student }