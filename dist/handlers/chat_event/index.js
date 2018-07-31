"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatEventResponse = {
    setupHandlers: function (bot) {
        bot.on("left_chat_member", leftChatEvent);
        bot.on("new_chat_members", joinedChatEvent);
    }
};
function leftChatEvent(ctx) {
    ctx.reply("Crimson, you're up!");
}
function joinedChatEvent(ctx) {
    ctx.reply("Hey, welcome to the dollars' telegram group!  I'm just a bot, but I'm sure others will welcome you in their own bizzare manner soon :)");
    setTimeout(() => {
        ctx.reply("We don't have many rules, mainly we just like to keep the chat drama free and SFW (Safe For Work).  Other than that, welcome and enjoy!");
    }, 500);
}
