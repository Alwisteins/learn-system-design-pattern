//builder pattern
/* is used to create objects in "steps". Normally we will have functions or 
methods that add certain properties or methods to our object. */

/* object that contain property */
const alwi = { name: "Alwi", gender: "Male", age: 16 };

/* add method to an object */
const addSocialSkill = (obj) => {
  obj.sayName = () => console.log("Hi everyone, my name is " + obj.name);
  obj.sayAge = () => console.log("Im " + obj.age + " years old");
  obj.askNumberToLady = () =>
    console.log("excuse me beautiful lady, can i get your number?");
};

console.log(alwi);
addSocialSkill(alwi);
alwi.sayName();
alwi.sayAge();
alwi.askNumberToLady();
