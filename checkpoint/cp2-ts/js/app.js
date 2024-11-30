"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started!");
    }
}
let myRedCar = new Car("Toyota", "Yango", 2023);
console.log("My first car : ", myRedCar);
myRedCar.start();
//# sourceMappingURL=app.js.map