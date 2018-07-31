"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = require("sinon");
function createCtx() {
    return {
        from: {
            username: 'testSender'
        },
        message: {
            text: 'hello world',
            reply_to_message: {
                from: {
                    username: 'testReceiver'
                }
            }
        },
        reply: sinon_1.spy(),
        replyWithHTML: sinon_1.spy(),
        replyWithSticker: sinon_1.spy()
    };
}
exports.createCtx = createCtx;
function getReplyUser(ctx) {
    const receiver = typeof ctx.message.reply_to_message !== "undefined"
        ? ctx.message.reply_to_message.from.username || ctx.message.reply_to_message.from.first_name
        : "themselves";
    return receiver;
}
exports.getReplyUser = getReplyUser;
