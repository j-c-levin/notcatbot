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
const dog_1 = require("./dog");
function getSarcasticReply() {
    const replies = ["No cats today, how about a dog?"];
    const index = Math.floor(Math.random() * replies.length);
    return replies[index];
}
exports.CatResponse = {
    setupHandlers: function (bot) {
        bot.hears("/cat", this.cat);
    },
    cat: function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = yield dog_1.getDogImage();
                // const response = {
                //   url: image,
                //   filename: 'hello'
                // };
                ctx.replyWithPhoto(image);
            }
            catch (e) {
                console.error(`Error getting dog image`);
            }
        });
    }
};
//# sourceMappingURL=index.js.map