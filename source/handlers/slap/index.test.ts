import "mocha";
import { expect } from "chai";
import { slap } from './index';
import { createCtx } from '../../utils/index';

describe('works', function () {
    it('does work', function () {
        const ctx = createCtx();
        slap(ctx);
        expect(ctx.reply.calledOnce).to.be.false;
    });
});
