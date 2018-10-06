"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.FunSlapResponse = {
    setupHandlers: function (bot) {
        bot.command("/funslap", funSlap);
        bot.command("/Funslap", funSlap);
    }
};
function funSlap(ctx) {
    const sender = ctx.from.username;
    const receiver = utils_1.getReplyUser(ctx);
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
        `${sender} told ${receiver} the bad news...there was no more hot chocolate`,
        `${sender} used secret psychic mind warfare on ${receiver}...to let them know they were thinking about them`,
        `${sender} used the power of greyskull on ${receiver}...and let them play as He-man`,
        `${sender} performed a german suplex on ${receiver}...onto a fuzzy bed of fuzziness`,
        `${sender} slam dunked ${receiver}'s head...with a waterballoon`,
        `${sender} set a bomb in ${receiver}'s base...and let him defuse it`,
        `${sender} unleashed the hounds on ${receiver}...and the puppers played with them for hours`,
        `${sender} sent ${receiver} swimming with the fishes...on an expenses-paid scuba diving trip`,
        `${sender} engaged ${receiver} in mortal combat...but promised he wouldn't cheese the fireballs`,
        `${sender} triggered ${receiver}...with the konami code for an extra life`,
        `${sender} spoiled fullmetal alchmeist for ${receiver}...to save them from the pain of watching the life-action film`
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.reply(replies[index]);
}
exports.funSlap = funSlap;
