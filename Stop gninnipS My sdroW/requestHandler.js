"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stopGninnipSRequestHandler;
var stopGnippips_1 = require("./stopGnippips");
function stopGninnipSRequestHandler(_a) {
    var sentence = _a.sentence;
    if (!sentence) {
        return "";
    }
    return (0, stopGnippips_1.default)(sentence);
}
