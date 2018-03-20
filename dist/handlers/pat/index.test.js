"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("./index");
const index_2 = require("../../utils/index");
describe('pat', function () {
    it('calls reply', function () {
        const ctx = index_2.createCtx();
        index_1.pat(ctx);
        chai_1.expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = index_2.createCtx();
        index_1.pat(ctx);
        chai_1.expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = index_2.createCtx();
        index_1.pat(ctx);
        chai_1.expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    it(`replies with receiver's name`, function () {
        const ctx = index_2.createCtx();
        index_1.pat(ctx);
        chai_1.expect(ctx.reply.getCall(0).args[0]).to.contain(ctx.message.reply_to_message.from.username);
    });
});
//# sourceMappingURL=index.test.js.map