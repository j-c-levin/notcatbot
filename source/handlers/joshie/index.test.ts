import "mocha";
import { expect } from "chai";
import { joshie } from './index';
import { createCtx } from '../../utils/index';

describe('joshie', function () {
    it('calls reply', function () {
        const ctx = createCtx();
        joshie(ctx);
        expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = createCtx();
        joshie(ctx);
        expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        joshie(ctx);
        expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    // Need to get promise 'to eventually equal' working
    // it('responds after a delay with a sticker', function () {
    //     const ctx = createCtx();
    //     joshie(ctx);
    //     expect(typeof ctx.replyWithSticker.getCall(0).args[0]).to.equal("string");
    // });
});
