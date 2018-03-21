export const ShrugResponse = {
  setupHandlers: function (bot: any) {
    bot.hears("/shrug", shrug);
  }
};

export function shrug(ctx: any): void {
  const replies = [
    "¯\\_(ツ)_/¯",
    "¯\\_ಠ_ಠ_/¯",
    "¯\\_ȌᴥȌ_/¯",
    "¯\\_༼ᴼل͜ᴼ༽_/¯",
    "┻━┻ ︵ ¯\\ (ツ)/¯ ︵ ┻━┻",
    "＼（〇_ｏ）／"
  ];
  const index = Math.floor(Math.random() * replies.length);
  ctx.reply(replies[index]);
}
