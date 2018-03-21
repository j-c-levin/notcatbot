import "mocha";
import { expect } from "chai";
import { pig } from './index';
import { createCtx } from '../../utils/index';

describe('pig', function () {
    it('calls replyWithSticker', function () {
        const ctx = createCtx();
        pig(ctx);
        expect(ctx.replyWithSticker.called).to.be.true;
    });
    it('calls replyWithSticker once', function () {
        const ctx = createCtx();
        pig(ctx);
        expect(ctx.replyWithSticker.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        pig(ctx);
        expect(typeof ctx.replyWithSticker.getCall(0).args[0]).to.equal("string");
    });
});
