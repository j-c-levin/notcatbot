"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// needs to be re-worked so that it all radiates out from the center
function centerRadialShout(input, ctx) {
    let response = "";
    input = input.trim().toUpperCase().replace(" ", "");
    const lengthOfWord = index_1.gridSize < input.length ? index_1.gridSize : input.length;
    const centerOfGrid = Math.floor(lengthOfWord / 2);
    for (let indexOfWord = 0; indexOfWord < lengthOfWord; indexOfWord++) {
        // Horizontal line
        if (indexOfWord === centerOfGrid) {
            response += input.slice(0, lengthOfWord).split("").join(" ");
            response += "\n";
            // Nothing else to do on this cycle
            continue;
        }
        // space out to the center of the grid
        for (let printPosition = 0; printPosition < lengthOfWord; printPosition++) {
            switch (printPosition) {
                // Vertical center column
                case centerOfGrid:
                    response += input.charAt(indexOfWord);
                    break;
                // Left diagonal
                case indexOfWord:
                    response += input.charAt(indexOfWord);
                    break;
                // Right diagonal
                case lengthOfWord - indexOfWord - 1:
                    response += input.charAt(indexOfWord);
                    break;
                // Continue spacing
                default:
                    response += "  ";
            }
        }
        response += "\n";
    }
    ctx.replyWithHTML(`<code>${response}</code>`);
}
exports.centerRadialShout = centerRadialShout;
//# sourceMappingURL=center_radial_shout.js.map