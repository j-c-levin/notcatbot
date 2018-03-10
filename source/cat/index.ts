export const CatResponse = {
  setupHandlers: function(bot: any) {
    bot.hears("/cat", this.cat);
  },
  cat: function(ctx) {
    ctx.reply("hello world");
  }
};
