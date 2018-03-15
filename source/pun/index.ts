function pun(ctx) {
  // Tell a pun or two
}

export const PunResponse = {
  setupHandlers: function (bot: any) {
    bot.command("/pun", pun);
  }
};
