"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("../../utils/index");
const caps_shout_1 = require("./caps_shout");
const center_radial_shout_1 = require("./center_radial_shout");
const left_corner_shout_1 = require("./left_corner_shout");
describe('shout', function () {
    describe('caps shout', function () {
        it('calls reply', function () {
            const ctx = index_1.createCtx();
            caps_shout_1.capsShout(ctx.message.text, ctx);
            chai_1.expect(ctx.reply.called).to.be.true;
        });
        it('calls reply once', function () {
            const ctx = index_1.createCtx();
            caps_shout_1.capsShout(ctx.message.text, ctx);
            chai_1.expect(ctx.reply.calledOnce).to.be.true;
        });
        it('responds with string', function () {
            const ctx = index_1.createCtx();
            caps_shout_1.capsShout(ctx.message.text, ctx);
            chai_1.expect(typeof ctx.reply.getCall(0).args[0]).to.equal("string");
        });
    });
    describe('center radial shout', function () {
        it('does not call reply', function () {
            const ctx = index_1.createCtx();
            center_radial_shout_1.centerRadialShout(ctx.message.text, ctx);
            chai_1.expect(ctx.reply.called).to.be.false;
        });
        it('calls replyWithHTML', function () {
            const ctx = index_1.createCtx();
            center_radial_shout_1.centerRadialShout(ctx.message.text, ctx);
            chai_1.expect(ctx.replyWithHTML.called).to.be.true;
        });
        it('calls replyWithHTML once', function () {
            const ctx = index_1.createCtx();
            center_radial_shout_1.centerRadialShout(ctx.message.text, ctx);
            chai_1.expect(ctx.replyWithHTML.calledOnce).to.be.true;
        });
        it('responds with string', function () {
            const ctx = index_1.createCtx();
            center_radial_shout_1.centerRadialShout(ctx.message.text, ctx);
            chai_1.expect(typeof ctx.replyWithHTML.getCall(0).args[0]).to.equal("string");
        });
    });
    describe('left corner shout', function () {
        it('does not call reply', function () {
            const ctx = index_1.createCtx();
            left_corner_shout_1.leftCornerShout(ctx.message.text, ctx);
            chai_1.expect(ctx.reply.called).to.be.false;
        });
        it('calls replyWithHTML', function () {
            const ctx = index_1.createCtx();
            left_corner_shout_1.leftCornerShout(ctx.message.text, ctx);
            chai_1.expect(ctx.replyWithHTML.called).to.be.true;
        });
        it('calls replyWithHTML once', function () {
            const ctx = index_1.createCtx();
            left_corner_shout_1.leftCornerShout(ctx.message.text, ctx);
            chai_1.expect(ctx.replyWithHTML.calledOnce).to.be.true;
        });
        it('responds with string', function () {
            const ctx = index_1.createCtx();
            left_corner_shout_1.leftCornerShout(ctx.message.text, ctx);
            chai_1.expect(typeof ctx.replyWithHTML.getCall(0).args[0]).to.equal("string");
        });
    });
});
//# sourceMappingURL=index.test.js.map