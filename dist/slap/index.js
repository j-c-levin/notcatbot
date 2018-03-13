"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlapResponse = {
    setupHandlers: function (bot) {
        bot.hears("/slap", this.default);
    },
    default: function (ctx) {
        const sender = ctx.from.username;
        const receiver = (typeof ctx.update.message.reply_to_message !== 'undefined') ? ctx.update.message.reply_to_message.from.username : 'themselves';
        const replies = [
            `${sender} crept up from behind and attacked ${receiver}...with a surprise hug`,
            `${sender} made ${receiver} sleep with the fish...in go fish`,
            `${sender} took the knife and cut ${receiver}...a slice of cake`,
            `${sender} ratted out ${receiver}'s...rodent infestation to pest control`,
            `${sender} took aim and shot ${receiver}...with a healing dart`,
            `${sender} threw ${receiver}...out of harms way`,
            `${sender} took ${receiver}'s money...and showed them how to invest it responsibly`,
            `${sender} shut the door on ${receiver}...so they could sleep in peace`,
            `${sender} hit ${receiver} for six...and critically succeeded in assisting them up`,
        ];
        const index = Math.floor(Math.random() * replies.length);
        ctx.reply(replies[index]);
    }
};
//# sourceMappingURL=index.js.map