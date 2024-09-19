"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highAndLow = void 0;
var highAndLow = /** @class */ (function () {
    function highAndLow() {
    }
    highAndLow.process = function (numberString) {
        var numbers = numberString
            .split(" ")
            .map(Number)
            .sort(function (x, y) {
            return x - y;
        });
        var lowest = numbers[0];
        var highest = numbers[numbers.length - 1];
        return "".concat(highest, " ").concat(lowest);
    };
    return highAndLow;
}());
exports.highAndLow = highAndLow;
