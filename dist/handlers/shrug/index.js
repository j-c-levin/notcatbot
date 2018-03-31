"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShrugResponse = {
    setupHandlers: function (bot) {
        bot.hears("/shrug", shrug);
    }
};
function shrug(ctx) {
    const replies = [
        "¯\\_(ツ)_/¯",
        "¯\\_ಠ_ಠ_/¯",
        "¯\\_ȌᴥȌ_/¯",
        "¯\\_༼ᴼل͜ᴼ༽_/¯",
        "┻━┻ ︵ ¯\\ (ツ)/¯ ︵ ┻━┻",
        "＼（〇_ｏ）／",
        "t(ツ)_/¯",
        "¯\(°_o)/¯",
        "¯\(◉‿◉)/¯",
        "へ‿(ツ)‿ㄏ",
        "¯\_༼ᴼل͜ᴼ༽_/¯",
        "¯\_( ͠° ͟ʖ °͠ )_/¯",
        "¯\_▐ ☯ ︿ ☯ ▐_/¯",
        "¯\_(⊙︿⊙)_/¯",
        "＼⍩⃝／",
        "┐( ˘_˘)┌",
        "┐(￣ヘ￣)┌",
        "╮(╯-╰”)╭",
        "╮(╯ل͜╰)╭",
        "╮ (. ❛ ᴗ ❛.) ╭",
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.reply(replies[index]);
}
exports.shrug = shrug;
//# sourceMappingURL=index.js.map