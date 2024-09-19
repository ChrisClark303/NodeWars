"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = spinWords;
function spinWords(sentence) {
    var words = sentence.split(" ");
    return words
        .map(function (w) {
        if (shouldSpinWord(w)) {
            return spinWord(w);
        }
        return w;
    })
        .join(" ");
}
function shouldSpinWord(word) {
    return word.length > 4;
}
function spinWord(word) {
    return word.split("").reverse().join("");
}
