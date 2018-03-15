import { gridSize } from "./index";

// needs to be re-worked so that it all radiates out from the center

export function centerRadialShout(input: string, ctx: any) {
  let response = "";
  input = input.trim().toUpperCase().replace(" ", "");
  const lengthOfWord = gridSize < input.length ? gridSize : input.length;
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
