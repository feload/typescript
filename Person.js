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
//# sourceMappingURL=Person.js.map