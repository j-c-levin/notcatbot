"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpResponse = {
    setupHandlers: function (bot) {
        bot.command("/help", help);
        bot.start(help);
    }
};
function help(ctx) {
    const helpText = `
      I'm so very talented, sometimes I even impress myself:
      /cat - might show you a cat photo, don't count on it though
      /horoscope - can I tell your future? The answer probably won't surprise you
      /hug - you've just got that urge to show someone some friendliness
      /slap - why would you do this to someone?
      /shrug - it's like a hug but with a few more letters
      /flip - get that anger out of you!
      /pat - for the times when they tried, they really did
      /pig - it's a thing
      /shout - be heard LOUDLY!
      ****** - ???easter egg???`;
    ctx.reply(helpText);
}
exports.help = help;
//# sourceMappingURL=index.js.map