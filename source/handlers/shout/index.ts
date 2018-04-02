import { capsShout } from './caps_shout';
import { leftCornerShout } from "./left_corner_shout";
import { centerRadialShout } from "./center_radial_shout";

export type ShoutStyle = (input: string, ctx: any) => void;

export const gridSize = 8;

export const ShoutResponse = {
  setupHandlers: function (bot: any) {
    bot.command("/shout", shout);
    bot.command("/Shout", shout);
  }
};

export function shout(ctx) {
  const replies: ShoutStyle[] = [capsShout, leftCornerShout, centerRadialShout];
  const index = Math.floor(Math.random() * replies.length);
  const toShout = ctx.message.text.replace("/shout", "");
  replies[index](toShout, ctx);
}
