export const LeftChatEventResponse = {
    setupHandlers: function(bot: any) {
      bot.on("left_chat_member", this.default);
    },
    default: function(ctx) {
      ctx.reply("Crimson, you're up!");
    }
  };