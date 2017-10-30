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
var Person = /** @class */ (function () {
    // Second parameter will be automatically created as a property.
    function Person(name, username) {
        this.username = username;
        this.age = 28;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Antonina", "anto");
person.printAge();
person.setType("Cool");
console.log(person);
// Inheritance.
var Felipe = /** @class */ (function (_super) {
    __extends(Felipe, _super);
    function Felipe() {
        var _this = _super.call(this, "Felipe", "feload") || this;
        _this.age = 32;
        return _this;
    }
    return Felipe;
}(Person));
var felipe = new Felipe();
console.log(felipe);
// Getters and setters.
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Animal species";
console.log(plant.species);
// Static properties & methods.
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diam) {
        return this.PI * diam;
    };
    Helpers.PI = 3.1416;
    return Helpers;
}());
console.log(Helpers.calcCircum(2));
//# sourceMappingURL=Person.js.map