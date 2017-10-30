class Person {
  name: string; // Public is the default value.
  private type: string;
  protected age: number = 28;

  // Second parameter will be automatically created as a property.
  constructor (name: string, public username: string) {
    this.name = name;
  }

  printAge () {
    console.log(this.age);
  }

  setType (type: string) : void {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Antonina", "anto");
person.printAge();
person.setType("Cool");
console.log(person);

// Inheritance.
class Felipe extends Person {
  constructor () {
    super("Felipe", "feload");
    this.age = 32;
  }
}

const felipe = new Felipe();
console.log(felipe);