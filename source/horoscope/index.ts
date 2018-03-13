export const HoroscopeResponse = {
  setupHandlers: function(bot: any) {
    bot.hears("/horoscope", this.default);
  },
  default: function(ctx) {
    const replies = [
      "Today is not a good day for you to bake, I'd recommend eating pizza instead.",
      "Today greatest danger could be your stupidity.",
      "Today you will write your own fortune on the line provided ________________",
      "Today the world is your oyster, and it is slowly closing around you, entrapping you in its prison.",
      "Today you will ask for your horoscope.  Oh hey, I got one right!",
      "Today water is your friend, give the coca-cola a miss.",
      "Today the winning lottery numbers are...oh, sorry.  That one wasn't for you.",
      "Help, I am being held hostage in a horoscope-writing factory.",
      "Today pass up the prunes. Eat many prunes, toilet for many moons.",
      "Today you will receive much reddit karma, go forth and upvote!",
      "WARNING! This fortune is useless!",
      "Today you are going to be...woah!  Pikachu, is that you?!",
      "Today is your special day...wait, no way!  Batman?!",
      "Today someone is standing...right behind you |ʘ‿ʘ)╯"
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.reply(replies[index]);
  }
};
