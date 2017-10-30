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

// Getters and setters.
class Plant {
  private _species: string = "Default";

  set species (value: string) {
    if (value.length > 3) {
      this._species = value;
    }
  }

  get species () : string {
    return this._species;
  }
}

const plant = new Plant();
console.log(plant.species);
plant.species = "Animal species";
console.log(plant.species);

// Static properties & methods.
class Helpers {
  static PI: number = 3.1416;
  static calcCircum (diam: number) : number {
    return this.PI * diam;
  }
}
console.log(Helpers.calcCircum(2));

// Abstract classes.
abstract class Project {
  projectName: string = "Default";
  budget: number;

  abstract changeName (name: string) :void;

  calcBudget () {
    return this.budget * 2;
  }
}
class ITProject extends Project {
  changeName (name: string) : void {
    this.projectName = name;
  }
}

const newProject = new ITProject();
newProject.changeName("Super IT project");
console.log(newProject);
