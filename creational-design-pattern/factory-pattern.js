// factory pattern
/* is pattern where one class can creating many objects that can be modified after creation. */

class PhoneFactory {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName = () => {
    console.log(this.name);
  };
  getPrice = () => {
    console.log("Rp" + this.price);
  };
}

const iPhone = new PhoneFactory("iPhone 11", 11000);
iPhone.getName();
iPhone.getPrice();

//modify class
PhoneFactory.prototype.install = (game) => {
  console.log(game + " berhasil diinstall");
};

const xiomi = new PhoneFactory("xiaomi redmi 5a", 999000);
xiomi.getName();
xiomi.getPrice();
xiomi.install("valorant");
