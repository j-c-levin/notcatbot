"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("./index");
const index_2 = require("../../utils/index");
describe('hug', function () {
    it('calls reply', function () {
        const ctx = index_2.createCtx();
        index_1.hug(ctx);
        chai_1.expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = index_2.createCtx();
        index_1.hug(ctx);
        chai_1.expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = index_2.createCtx();
        index_1.hug(ctx);
        chai_1.expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    it('responds with reply mention name', function () {
        const ctx = index_2.createCtx();
        index_1.hug(ctx);
        chai_1.expect(ctx.reply.getCall(0).args[0]).to.contain(ctx.message.reply_to_message.from.username);
    });
    it('responds with sender name', function () {
        const ctx = index_2.createCtx();
        index_1.hug(ctx);
        chai_1.expect(ctx.reply.getCall(0).args[0]).to.contain(ctx.from.username);
    });
    it(`responds with 'themselves' if there is no reply mention`, function () {
        const ctx = index_2.createCtx();
        delete ctx.message.reply_to_message;
        index_1.hug(ctx);
        chai_1.expect(ctx.reply.getCall(0).args[0]).to.contain('themselves');
    });
});
//# sourceMappingURL=index.test.js.map