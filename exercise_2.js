var double = function (value) {
    return value * 2;
};
console.log(double(2));
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello, %s", name);
};
greet();
greet('Felipe');
var numbers = [-3, 33, 38, 5];
console.log('%i', Math.min.apply(Math, numbers));
//# sourceMappingURL=exercise_2.js.map