// string
let myName : string = 'Felipe';

// number
let myAge: number = 27;

// boolean
let hasHobbies: boolean = true;

// array
let hobbies: string[] = ['cooking', 'playing guitar'];

// tuples (mixed arrays). Order is important.
let address: [string, number] = ["Super street", 99];

// enum
enum Color {
  Gray,
  Green = 200,
  Blue = 'hi'
}

let myColor: Color = Color.Green;
console.log(myColor, Color.Blue);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName (): string {
  return myName;
}

function sayHello () : void {
  console.log();
}

function multiply (a:number, b:number) : number {
  return a * b;
}

// function types.
// Specifies the type of function that is allowed to be referenced by 'myMultiply' variable.
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(1, 2));

// objects
let userData: { name: string, age: number } = {
  name: "Felipe",
  age: 32
};

userData = {
  name: "Hello",
  age: 22
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
}

// complex object aliases
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [],
  output: function (all: boolean): number[] {
    return this.data;
  }
};

// union types.

let myRealRealAge: number | string = 32;
myRealRealAge = "32";
// myRealRealAge = true; ERROR

// Check types.
let finalValue = 30;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

// never type :|
function neverReturns () :never {
  throw new Error('An error');
}

// Nullable types.
let canBeNull: number | null = 12;
canBeNull = null;