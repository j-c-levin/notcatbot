import "mocha";
import { expect } from "chai";
import { pat } from './index';
import { createCtx } from '../../utils/index';

describe('pat', function () {
    it('calls reply', function () {
        const ctx = createCtx();
        pat(ctx);
        expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = createCtx();
        pat(ctx);
        expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        pat(ctx);
        expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    it(`replies with receiver's name`, function () {
        const ctx = createCtx();
        pat(ctx);
        expect(ctx.reply.getCall(0).args[0]).to.contain(ctx.message.reply_to_message.from.username);
    });
});
