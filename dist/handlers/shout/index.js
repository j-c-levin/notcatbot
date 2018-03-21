"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caps_shout_1 = require("./caps_shout");
const left_corner_shout_1 = require("./left_corner_shout");
const center_radial_shout_1 = require("./center_radial_shout");
exports.gridSize = 8;
exports.ShoutResponse = {
    setupHandlers: function (bot) {
        bot.command("/shout", shout);
    }
};
function shout(ctx) {
    const replies = [caps_shout_1.capsShout, left_corner_shout_1.leftCornerShout, center_radial_shout_1.centerRadialShout];
    const index = Math.floor(Math.random() * replies.length);
    const toShout = ctx.message.text.replace("/shout", "");
    replies[index](toShout, ctx);
}
exports.shout = shout;
//# sourceMappingURL=index.js.map