"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function leftCornerShout(input, ctx) {
    let response = '';
    input = input.trim().toUpperCase().replace(" ", "");
    const length = (index_1.gridSize < input.length) ? index_1.gridSize : input.length;
    // Print horizontally
    response += input.slice(0, length).split("").join(" ");
    // Print diagonally and vertically together
    for (let i = 1; i < length; i++) {
        // Vertical
        response += '\n';
        response += input.charAt(i);
        // Diagonal spacing
        for (let j = 0; j < i; j++) {
            response += '  ';
        }
        // Top row
        response += input.charAt(i);
    }
    ctx.replyWithHTML(`<code>${response}</code>`);
}
exports.leftCornerShout = leftCornerShout;
//# sourceMappingURL=left_corner_shout.js.map