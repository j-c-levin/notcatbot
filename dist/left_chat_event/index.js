"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatEventResponse = {
    setupHandlers: function (bot) {
        bot.on("left_chat_member", leftChatEvent);
    }
};
function leftChatEvent(ctx) {
    ctx.reply("Crimson, you're up!");
}
//# sourceMappingURL=index.js.map