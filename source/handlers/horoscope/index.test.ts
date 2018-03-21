import "mocha";
import { expect } from "chai";
import { horoscope } from './index';
import { createCtx } from '../../utils/index';

describe('horoscope', function () {
    it('calls reply', function () {
        const ctx = createCtx();
        horoscope(ctx);
        expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = createCtx();
        horoscope(ctx);
        expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = createCtx();
        horoscope(ctx);
        expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
});
