import "mocha";
import { expect } from "chai";
import { shrug } from './index';
import { createCtx } from '../../utils/index';

describe('shrug', function () {
    it('calls reply', function () {
        const ctx = createCtx();
        shrug(ctx);
        expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = createCtx();
        shrug(ctx);
        expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        shrug(ctx);
        expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
});
