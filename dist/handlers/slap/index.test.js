"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("./index");
const index_2 = require("../../utils/index");
describe('works', function () {
    it('does work', function () {
        const ctx = index_2.createCtx();
        index_1.slap(ctx);
        chai_1.expect(ctx.reply.calledOnce).to.be.false;
    });
});
//# sourceMappingURL=index.test.js.map