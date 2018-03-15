"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pig(ctx) {
    const replies = [
        "CAADBAADJgAD_QZlAxapQuDfQRYpAg",
        "CAADBAADLAAD_QZlA_FV-5qsgqP7Ag",
        "CAADBAADPAAD_QZlA6M2zQkpszDEAg",
        "CAADBAADUgAD_QZlAwbiwTYkM20nAg",
        "CAADBAADcAAD_QZlA19FORwUHUePAg",
        "CAADBAADvQwAAuU4Fw-iyIzzsIAliQI",
        "CAADBAADxgwAAuU4Fw9iUs4JXoEVswI",
        "CAADBAADzQwAAuU4Fw_nJPq5wEOLsAI",
        "CAADBAADzAwAAuU4Fw8pzJWRixXF6QI",
        "CAADBAAD1wwAAuU4Fw9VgHyQCNCzBgI",
        "CAADAgADbQADygMGC_HAWDz1od18Ag",
        "CAADAgADmAADygMGC9pJLfEFasBXAg",
        "CAADAgADigADygMGC3vUp99ChFWOAg",
        "CAADAgADZwADygMGC9IzvV8VKGmNAg",
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.replyWithSticker(replies[index]);
}
exports.PigResponse = {
    setupHandlers: function (bot) {
        bot.hears("/pig", pig);
    }
};
//# sourceMappingURL=index.js.map