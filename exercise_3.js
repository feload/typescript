// 3.1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car1 = new Car("BMW");
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);
// 3.2
var Shape = /** @class */ (function () {
    function Shape() {
        this._width = 0;
        this._length = 0;
    }
    Object.defineProperty(Shape.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.calcSize = function () {
        return this.width * this._length;
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(Shape));
var rect = new Rectangle();
rect.width = 10;
rect.length = 20;
console.log(rect.calcSize());
// 3.3
var Persona = /** @class */ (function () {
    function Persona() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(Persona.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
var pepe = new Persona();
pepe.firstName = "PEP";
console.log(pepe.firstName);
pepe.firstName = "Juanjo";
console.log(pepe.firstName);
//# sourceMappingURL=exercise_3.js.map