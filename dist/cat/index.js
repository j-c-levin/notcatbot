"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatResponse = {
    setupHandlers: function (bot) {
        bot.hears("/cat", this.cat);
    },
    cat: function (ctx) {
        ctx.reply("hello world");
    }
};
//# sourceMappingURL=index.js.map