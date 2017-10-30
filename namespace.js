var MyMathNs;
(function (MyMathNs) {
    var PI = 3.14;
    function calcCircum(diam) {
        return diam * PI;
    }
    MyMathNs.calcCircum = calcCircum;
    function calcRect(width, length) {
        return width * length;
    }
    MyMathNs.calcRect = calcRect;
})(MyMathNs || (MyMathNs = {}));
var PI = 2.99;
console.log(MyMathNs.calcCircum(10));
//# sourceMappingURL=namespace.js.map