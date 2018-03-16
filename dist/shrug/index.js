"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShrugResponse = {
    setupHandlers: function (bot) {
        bot.hears("/shrug", shrug);
    }
};
function shrug(ctx) {
    const sender = ctx.from.username;
    const receiver = (typeof ctx.update.message.reply_to_message !== 'undefined') ? ctx.update.message.reply_to_message.from.username : 'themselves';
    const replies = [
        "¯\\_(ツ)_/¯",
        "¯\\_ಠ_ಠ_/¯",
        "¯\\_ȌᴥȌ_/¯",
        "¯\\_༼ᴼل͜ᴼ༽_/¯",
        "┻━┻ ︵ ¯\\ (ツ)/¯ ︵ ┻━┻",
        "＼（〇_ｏ）／"
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.reply(replies[index]);
}
//# sourceMappingURL=index.js.map