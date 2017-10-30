// 3.1

class Car {
  name: string;
  acceleration: number = 0;

  constructor (name: string) {
    this.name = name;
  }

  honk () : void {
    console.log("Toooooot!");
  }

  accelerate (speed: number) {
    this.acceleration += speed;
  }
}

const car1 = new Car("BMW");
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);

// 3.2

abstract class Shape {
  private _width: number = 0;
  private _length: number = 0;

  set width (value: number) {
    this._width = value;
  }

  get width () : number {
    return this._width;
  }

  set length (value: number) {
    this._length = value;
  }

  get length () : number {
    return this._length;
  }

  calcSize () : number{
    return this.width * this._length;
  }
}

class Rectangle extends Shape {
}

const rect = new Rectangle();
rect.width = 10;
rect.length = 20;
console.log(rect.calcSize());

// 3.3
class Persona {
  private _firstName: string = "";
  private enumerable: boolean = true;
  private configurable: boolean = true;

  set firstName (value: string) {
    if (value.length > 3) {
      this._firstName = value;
    }
  }

  get firstName () : string {
    return this._firstName;
  }
}

const pepe = new Persona();
pepe.firstName = "PEP";
console.log(pepe.firstName);
pepe.firstName = "Juanjo";
console.log(pepe.firstName);