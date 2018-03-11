import { getDogImage } from "./dog";

function getSarcasticReply(): string {
  const replies = ["No cats today, how about a dog?"];
  const index = Math.floor(Math.random() * replies.length);
  return replies[index];
}

export const CatResponse = {
  setupHandlers: function(bot: any) {
    bot.hears("/cat", this.cat);
  },
  cat: async function(ctx) {
    try {
      const image = await getDogImage();
      ctx.replyWithPhoto(image);
    } catch (e) {
      console.error(`Error getting dog image`);
      ctx.reply("Couldn't find any cats. *shrug*");
    }
  }
};
