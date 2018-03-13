"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatResponse = {
    setupHandlers: function (bot) {
        bot.hears("/pat", this.default);
    },
    default: function (ctx) {
        // If there's no @mention, use the sender's username
        const receiver = typeof ctx.update.message.reply_to_message !== "undefined"
            ? ctx.update.message.reply_to_message.from.username
            : ctx.from.username;
        const replies = [
            `On the other hand, ${receiver} tried REALLY hard...`,
            `Well, ${receiver} did give it their best`,
            `Let's just politely move on from what ${receiver} just did`,
            `${receiver} must feel a bit embarassed about that`,
            `It took me a moment to get it...oh dear ${receiver}`,
            `Wow...${receiver}, I just can't...`,
            `I feel a little bad for ${receiver}`,
            `If I had an award for pity I'd give it to ${receiver}`,
            `${receiver} took second place in the pity olympics, but only because the judges felt guilty`,
            `${receiver}...not having a good day`
        ];
        const index = Math.floor(Math.random() * replies.length);
        ctx.reply(replies[index]);
    }
};
//# sourceMappingURL=index.js.map