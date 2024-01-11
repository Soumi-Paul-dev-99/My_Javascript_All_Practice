//object literals
const person = {
  alive: true,
};
const musician = {
  plays: true,
};

// console.log(musician.plays);
// musician.__proto__ = person; // here inheretance happens.
// console.log(musician.alive);
// console.log(musician);

//JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__

// Object.setPrototypeOf(musician, person); // we can use this instead of musician.__proto__ = person;
// console.log(musician.alive);
// console.log(Object.getPrototypeOf(musician));
// console.log(musician.__proto__);
// console.log(Object.getPrototypeOf(musician) === musician.__proto__);

Object.setPrototypeOf(musician, person);
// console.log(musician.plays);
//missing property => got to person
// console.log(musician.alive);
//what happens in prototype chain  javascript looks for the alive property in musician and if its not there it goes to next link into the chain, or goes up to the musician proto and there you can see the alive property is found.

//extenting the prototype chain
const guitarist = {
  strings: 6,
  __proto__: musician,
};

// console.log(guitarist.alive);
// console.log(guitarist.plays);
// console.log(guitarist.strings);
// console.log(guitarist);
//guitarist has string property of 6, then when it looks for alive is first walks up the chain to the musician. because the musician is the proto.but musician does not have the alive property.then it has walks up the chain to the person one ,more time to find the alive property.

//********************************** */
//no circular referebces allowed (person.__proto__ cant be guitarist)
// the __proto__ value must be object or null
//An object can only directly inherit from one object.

//********************************************  */
//object with getter and setter method
const car = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  },
};
// console.log(car.seatMaterial);

// const luxuryCar = {};
// Object.setPrototypeOf(luxuryCar, car);
// luxuryCar.seatMaterial = "leather"; // Note keyword this
// console.log(luxuryCar);
// console.log(luxuryCar.doors);
// console.log(car);

// console.log(luxuryCar.valueOf());

//Object constructor
function Animal(species) {
  this.species = species;
  this.eats = true;
}
Animal.prototype.walks = function () {
  //walks function can be inhereted as i use prototype
  return `A ${this.species} is walking`;
};

const Bear = new Animal("bear");
// console.log(Bear.species);
// console.log(Bear.walks());

// console.log(Bear.__proto__);
// console.log(Animal.prototype);
// console.log(Bear.__proto__ === Animal.prototype);

//Now an ES6 classes example of inheritance
class Vehicle {
  constructor() {
    (this.wheels = 4), (this.motorized = true);
  }

  ready() {
    return "Ready to go";
  }
}

class MotorCycle extends Vehicle {
  constructor() {
    super(), (this.wheels = 2); // here we redeclare wheels. so we have to call super()
  }

  wheelie() {
    return "on one wheel now";
  }
}

const myBike = new MotorCycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());
