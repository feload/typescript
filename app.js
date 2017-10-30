// string
var myName = 'Felipe';
// number
var myAge = 27;
// boolean
var hasHobbies = true;
// array
var hobbies = ['cooking', 'playing guitar'];
// tuples (mixed arrays). Order is important.
var address = ["Super street", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 200] = "Green";
    Color["Blue"] = "hi";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor, Color.Blue);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
function sayHello() {
    console.log();
}
function multiply(a, b) {
    return a * b;
}
// function types.
// Specifies the type of function that is allowed to be referenced by 'myMultiply' variable.
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(1, 2));
// objects
var userData = {
    name: "Felipe",
    age: 32
};
userData = {
    name: "Hello",
    age: 22
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [],
    output: function (all) {
        return this.data;
    }
};
// union types.
var myRealRealAge = 32;
myRealRealAge = "32";
// myRealRealAge = true; ERROR
// Check types.
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never type :|
function neverReturns() {
    throw new Error('An error');
}
// Nullable types.
var canBeNull = 12;
canBeNull = null;
//# sourceMappingURL=app.js.map