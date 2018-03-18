import "mocha";
import { expect } from "chai";
import { slap } from './index';
import { createCtx } from '../../utils/index';

describe('slap', function () {
    it('calls reply', function () {
        const ctx = createCtx();
        slap(ctx);
        expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        slap(ctx);
        expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
});
