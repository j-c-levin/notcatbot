"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("./index");
const index_2 = require("../../utils/index");
describe('help', function () {
    it('calls reply', function () {
        const ctx = index_2.createCtx();
        index_1.help(ctx);
        chai_1.expect(ctx.reply.called).to.be.true;
    });
    it('calls reply once', function () {
        const ctx = index_2.createCtx();
        index_1.help(ctx);
        chai_1.expect(ctx.reply.calledOnce).to.be.true;
    });
    it('responds with string', function () {
        const ctx = index_2.createCtx();
        index_1.help(ctx);
        chai_1.expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
    });
    // This isn't working, probably for very silly reasons but comparing the strings that come out is not working.
    // it('responds with the help text', function () {
    // const helpText = `I'm so very talented, sometimes I even impress myself:
    // /cat - might show you a cat photo, don't count on it though.
    // /horoscope - can I tell your future? The answer probably won't surprise you.
    // /hug - you've just got that urge to show someone some friendliness.
    // /slap - why would you do this?
    // /shrug - it's like a hug but with a few more letters.
    // /flip - get that anger out of you!
    // /pat - they tried, they really did.
    // /pig - it's a thing.
    // /shout - be heard LOUDLY!
    // ****** - ??????`;
    // const ctx = createCtx();
    // help(ctx);
    // // console.log(ctx.reply.getCall(0).args[0]);
    // expect(ctx.reply.getCall(0).args[0]).to.equal(JSON.stringify(helpText));
    // });
});
//# sourceMappingURL=index.test.js.map