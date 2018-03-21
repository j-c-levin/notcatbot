import "mocha";
import { expect } from "chai";
import { hug } from './index';
import { createCtx } from '../../utils/index';

describe('hug', function () {
    it('calls reply', function () {
        const ctx = createCtx();
        hug(ctx);
        expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = createCtx();
        hug(ctx);
        expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        hug(ctx);
        expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    it('responds with reply mention name', function () {
        const ctx = createCtx();
        hug(ctx);
        expect(ctx.reply.getCall(0).args[0]).to.contain(ctx.message.reply_to_message.from.username);
    });
    it('responds with sender name', function () {
        const ctx = createCtx();
        hug(ctx);
        expect(ctx.reply.getCall(0).args[0]).to.contain(ctx.from.username);
    });
    it(`responds with 'themselves' if there is no reply mention`, function () {
        const ctx = createCtx();
        delete ctx.message.reply_to_message;
        hug(ctx);
        expect(ctx.reply.getCall(0).args[0]).to.contain('themselves');
    });
});
