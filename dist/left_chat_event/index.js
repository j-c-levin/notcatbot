"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftChatEventResponse = {
    setupHandlers: function (bot) {
        bot.on("left_chat_member", this.default);
    },
    default: function (ctx) {
        ctx.reply("Crimson, you're up!");
    }
};
//# sourceMappingURL=index.js.map