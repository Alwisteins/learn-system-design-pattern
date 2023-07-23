// prototype pattern
/* is a pattern allows you to create an object using another object as a blueprint, 
inheriting its properties and methods. */

const sepuh = {
  normal: () => console.log("I can do all role of web development!"),
  songong: () => console.log("bang lu sepuh yak?"),
  samaAja: () => console.log("wih keren banget puh, ajarin dong puh"),
};

const developer = {
  name: "Alwi koding",
  quotes: "masa depan yang pasti adalah kematian",
};

// inherit prototype from other object
Object.setPrototypeOf(developer, sepuh);


console.log(Object.getPrototypeOf(developer));
console.log(developer)
developer.normal()
developer.songong()
developer.samaAja()
