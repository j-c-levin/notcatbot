import { getDogImage } from "./dogApi";

function getSarcasticReply(): string {
  const replies = [
    "No cats today, how about a dog?",
    "Ran out of cats, sorry.",
    "Just a sec, just a sec, check out this dog pic I found",
    "Dammit man, we don't need any more cats!",
    "Full power to MOAR DOGGIES!!",
    "Cannot comply with that order sir!",
    "But...but...but what about this good boy?",
    "I found a cat online but guess I got catfished."
  ];
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
      ctx.reply(getSarcasticReply());
    } catch (e) {
      console.error(`Error getting dog image`);
      ctx.reply("Couldn't find any cats. *shrug*");
    }
  }
};
