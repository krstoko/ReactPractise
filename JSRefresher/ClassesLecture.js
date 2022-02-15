class Human {
  // Adding propertys with constructor
  constructor() {
    this.gender = "male";
  }
  // We add method to print gender
  printGender() {
    console.log(this.gender);
  }
}

// With extend we inharit proparty and method from extended Class
class Person extends Human {
  // Adding propertys with constructor
  constructor() {
    //   If we are extending we need to add super() to execute parent constructor
    super()
    this.name = "Krsto";
  }

  // We add method to print name
  printName() {
    console.log(this.name);
  }
}

// now we use this class to store instance in constant

const person = new Person();
person.printName();
person.printGender()