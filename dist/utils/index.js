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
//# sourceMappingURL=index.js.map