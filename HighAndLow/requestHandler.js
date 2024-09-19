"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = highAndLowRequestHandler;
var highAndLow_1 = require("./highAndLow");
function highAndLowRequestHandler(_a) {
    var numbers = _a.numbers;
    if (!numbers) {
        return "";
    }
    return highAndLow_1.highAndLow.process(numbers);
}
