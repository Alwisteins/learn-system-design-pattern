// decorator pattern
/* is similar like using react component in other react component.
wich mean this pattern is also like builder pattern, this pattern lets you attach 
new behaviors to objects by placing them inside wrapper objects that contain the behaviors.*/

const User = function (name) {
  this.name = name;
  this.say = () => console.log("User: " + this.name);
};

// this where decorator pattern apply
const DetailUser = function (user, street, city) {
  this.user = user;
  this.name = user.name;
  this.street = street;
  this.city = city;

  this.say = () => {
    console.log(
      "DetailUser: " + this.name + ", " + this.street + ", " + this.city
    );
  };
};

const run = () => {
  const user = new User("Alwisteins");
  user.say();
  console.log(user);

  const detailUser = new DetailUser(user, "somewhere", "Middle Java");
  detailUser.say();
  console.log(detailUser);
};
run();
