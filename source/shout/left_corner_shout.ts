import { gridSize } from './index';

export function leftCornerShout(input: string, ctx: any): void {
    let response = '';
    input = input.trim().toUpperCase().replace(" ", "");
    const length = (gridSize < input.length) ? gridSize : input.length;
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
