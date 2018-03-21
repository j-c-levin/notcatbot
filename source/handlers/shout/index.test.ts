import "mocha";
import { expect } from "chai";
import { createCtx } from '../../utils/index';
import { capsShout } from './caps_shout';
import { centerRadialShout } from './center_radial_shout';
import { leftCornerShout } from './left_corner_shout';

describe('shout', function () {
    describe('caps shout', function () {
        it('calls reply', function () {
            const ctx = createCtx();
            capsShout(ctx.message.text, ctx);
            expect(ctx.reply.called).to.be.true;
        });
        it('calls reply once', function () {
            const ctx = createCtx();
            capsShout(ctx.message.text, ctx);
            expect(ctx.reply.calledOnce).to.be.true;
        });
        it('responds with string', function () {
            const ctx = createCtx();
            capsShout(ctx.message.text, ctx);
            expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
        });
    });
    describe('center radial shout', function () {
        it('does not call reply', function () {
            const ctx = createCtx();
            centerRadialShout(ctx.message.text, ctx);
            expect(ctx.reply.called).to.be.false;
        });
        it('calls replyWithHTML', function () {
            const ctx = createCtx();
            centerRadialShout(ctx.message.text, ctx);
            expect(ctx.replyWithHTML.called).to.be.true;
        });
        it('calls replyWithHTML once', function () {
            const ctx = createCtx();
            centerRadialShout(ctx.message.text, ctx);
            expect(ctx.replyWithHTML.calledOnce).to.be.true;
        });
        it('responds with string', function () {
            const ctx = createCtx();
            centerRadialShout(ctx.message.text, ctx);
            expect(typeof ctx.replyWithHTML.getCall(0).args[0]).to.equal("string");
        });
    });
    describe('left corner shout', function () {
        it('does not call reply', function () {
            const ctx = createCtx();
            leftCornerShout(ctx.message.text, ctx);
            expect(ctx.reply.called).to.be.false;
        });
        it('calls replyWithHTML', function () {
            const ctx = createCtx();
            leftCornerShout(ctx.message.text, ctx);
            expect(ctx.replyWithHTML.called).to.be.true;
        });
        it('calls replyWithHTML once', function () {
            const ctx = createCtx();
            leftCornerShout(ctx.message.text, ctx);
            expect(ctx.replyWithHTML.calledOnce).to.be.true;
        });
        it('responds with string', function () {
            const ctx = createCtx();
            leftCornerShout(ctx.message.text, ctx);
            expect(typeof ctx.replyWithHTML.getCall(0).args[0]).to.equal("string");
        });
    });
});
