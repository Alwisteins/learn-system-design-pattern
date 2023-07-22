//abstract factory pattern
/* Basically it just adds an abstraction layer over the factory method pattern,
so that we can create many different types of objects,
but still interact with a single factory function or class */

/* We have a class or "concrete factory" for each vehicle type */
class Car {
  constructor() {
    this.name = "Car";
    this.wheels = 4;
  }
  turnOn = () => console.log("Chacabúm!!");
}

class Truck {
  constructor() {
    this.name = "Truck";
    this.wheels = 8;
  }
  turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!");
}

/* And an abstract factory that works as a single point of interaction for our clients
to interact with some concrete factory */
const vehicleFactory = {
  createVehicle: function (type) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle("car");
const truck = vehicleFactory.createVehicle("truck");

console.log(car, truck)