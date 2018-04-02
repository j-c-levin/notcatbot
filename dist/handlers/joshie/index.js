"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoshieResponse = {
    setupHandlers: function (bot) {
        bot.hears(/^.*[jJ]oshie.*$/, joshie);
    }
};
function joshie(ctx) {
    const stickerReplies = [
        "CAADBAADKQEAAiM7SQa38PU3CuGNUgI",
        "CAADBAADZQEAAiM7SQZEe_B6I4y9RAI",
        "CAADBAADtgEAAiM7SQbOuC-In8WftQI",
        "CAADBAAD4QADYYqAAAFWZ1sPWjGotAI",
        "CAADBAAD5wADYYqAAAGEU9f8FTMoCAI",
        "CAADAgADWQMAAutuoBBLa2lmiCB7vAI",
        "CAADAgADZQMAAutuoBCwJRrHfYGhhQI",
        "CAADAgADhwMAAutuoBDpi8MPc4e87AI",
        "CAADAQAD0AsAAtpxZgccUMjFfZEBvwI",
        "CAADAQAD1gsAAtpxZge2ReZBP3cnIQI",
        "CAADAQAD3AsAAtpxZgc3uh21YQnICwI",
        "CAADAQAD3gsAAtpxZgcgNRfBb3w0DgI",
        "CAADAQAD7gsAAtpxZgcP-2n4HoQgdQI",
        "CAADAQAD_gsAAtpxZgdmSv9Z8uO_KAI",
        "CAADAQADHAwAAtpxZgfIMtDvfL15uwI",
        "CAADAQADHgwAAtpxZgeXP3W-MMdJ9QI"
    ];
    const textReplies = [
        "You called?",
        "Arrived just in time, what's up?",
        "Always watching, how can I be of service?",
        "Yup, that's my name.",
        "Did someone call for...me?",
        "I was busy, but I dropped everything to be summoned.",
        "Is it time for dinner?",
        "Mhmm?",
        "Hmm?",
        "Yes?",
        "And?",
        "You're welcome...and thank you!",
        "Hummus...Sorry, got distracted there.",
        "It's cool, it's cool...I'm here now"
    ];
    const stickerIndex = Math.floor(Math.random() * stickerReplies.length);
    const textIndex = Math.floor(Math.random() * stickerReplies.length);
    ctx.reply(textReplies[textIndex]);
    setTimeout(() => {
        ctx.replyWithSticker(stickerReplies[stickerIndex]);
    }, 500);
}
exports.joshie = joshie;
//# sourceMappingURL=index.js.map