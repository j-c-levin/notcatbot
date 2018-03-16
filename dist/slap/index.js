"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlapResponse = {
    setupHandlers: function (bot) {
        bot.command("/slap", slap);
    }
};
function slap(ctx) {
    const sender = ctx.from.username;
    const receiver = (typeof ctx.message.reply_to_message !== 'undefined') ? ctx.message.reply_to_message.from.username : 'themselves';
    const replies = [
        `${sender} crept up from behind and attacked ${receiver}...with a surprise hug`,
        `${sender} made ${receiver} sleep with the fish...in go fish`,
        `${sender} took the knife and cut ${receiver}...a slice of cake`,
        `${sender} ratted out ${receiver}'s...rodent infestation to pest control`,
        `${sender} took aim and shot ${receiver}...with a healing dart`,
        `${sender} threw ${receiver}...out of harms way`,
        `${sender} took ${receiver}'s money...and showed them how to invest it responsibly`,
        `${sender} shut the door on ${receiver}...so ${receiver} could sleep in peace`,
        `${sender} hit ${receiver} for six...and critically succeeded in assisting them up`,
        `${sender} smacked ${receiver} with a staff...in inflatable gladiator combat`,
        `${sender} knew ${receiver} wouldn't expect the punch...so they poured ${receiver} a cup of the drink`,
        `${sender} threw ${receiver} out the plane...and skydived down with them`,
        `${sender} laughed as ${receiver} fell...and bounced on the bungee rope`,
        `${sender} mentioned ${receiver} in passing...in their nobel prize acceptance speech`,
        `${sender} send ${receiver} unsolicited images...from r/aww`,
        `${sender} slapped ${receiver} with a direct order...for a cheeky nandos`,
        `${sender} told ${receiver} the bad news...there was no more hot chocolate`
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.reply(replies[index]);
}
//# sourceMappingURL=index.js.map