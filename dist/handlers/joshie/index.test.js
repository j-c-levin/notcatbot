"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("./index");
const index_2 = require("../../utils/index");
describe('joshie', function () {
    it('calls reply', function () {
        const ctx = index_2.createCtx();
        index_1.joshie(ctx);
        chai_1.expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = index_2.createCtx();
        index_1.joshie(ctx);
        chai_1.expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = index_2.createCtx();
        index_1.joshie(ctx);
        chai_1.expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    // Need to get promise 'to eventually equal' working
    // it('responds after a delay with a sticker', function () {
    //     const ctx = createCtx();
    //     joshie(ctx);
    //     expect(typeof ctx.replyWithSticker.getCall(0).args[0]).to.equal("string");
    // });
});
//# sourceMappingURL=index.test.js.map