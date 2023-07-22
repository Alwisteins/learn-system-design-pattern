//singleton design pattern
/* is a design pattern that ensures that a class or object literal has only one immutable instance */

class AlwiBlueprint {
  constructor() {}
  gender() {
    console.log("I am a man!");
  }
  future() {
    console.log("something in the future that are real is our dead");
  }
}

const alwi = new AlwiBlueprint();
Object.freeze(alwi)
alwi.gender();
alwi.future();
