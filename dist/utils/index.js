"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = require("sinon");
function createCtx() {
    const replySpy = sinon_1.spy();
    return {
        from: {
            username: 'testSender'
        },
        message: {
            reply_to_message: {
                from: {
                    username: 'testReceiver'
                }
            }
        },
        reply: replySpy
    };
}
exports.createCtx = createCtx;
//# sourceMappingURL=index.js.map