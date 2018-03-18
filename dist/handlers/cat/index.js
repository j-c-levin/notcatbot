"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dogApi_1 = require("./dogApi");
exports.CatResponse = {
    setupHandlers: function (bot) {
        bot.hears("/cat", cat);
    }
};
function getSarcasticReply() {
    const replies = [
        "No cats today, how about a dog?",
        "Ran out of cats, sorry.",
        "Just a sec, just a sec, check out this dog pic I found",
        "Dammit man, we don't need any more cats!",
        "Full power to MOAR DOGGIES!!",
        "Cannot comply with that order sir!",
        "But...but...but what about this good boy?",
        "I found a cat online but guess I got catfished."
    ];
    const index = Math.floor(Math.random() * replies.length);
    return replies[index];
}
function cat(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const image = yield dogApi_1.getDogImage();
            ctx.replyWithPhoto(image);
            setTimeout(() => {
                ctx.reply(getSarcasticReply());
            }, 200);
        }
        catch (e) {
            console.error(`Error getting dog image`);
            ctx.reply("Couldn't find any cats. *shrug*");
        }
    });
}
//# sourceMappingURL=index.js.map