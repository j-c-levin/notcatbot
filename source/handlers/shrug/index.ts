export const ShrugResponse = {
  setupHandlers: function (bot: any) {
    bot.command("/shrug", shrug);
    bot.command("/Shrug", shrug);
  }
};

export function shrug(ctx: any): void {
  const replies = [
    "¯\\_(ツ)_/¯",
    "¯\\_ಠ_ಠ_/¯",
    "¯\\_ȌᴥȌ_/¯",
    "¯\\_༼ᴼل͜ᴼ༽_/¯",
    "┻━┻ ︵ ¯\\ (ツ)/¯ ︵ ┻━┻",
    "＼（〇_ｏ）／",
    "t(ツ)_/¯",
    "¯\(°_o)/¯",
    "¯\(◉‿◉)/¯",
    "へ‿(ツ)‿ㄏ",
    "¯\_༼ᴼل͜ᴼ༽_/¯",
    "¯\_( ͠° ͟ʖ °͠ )_/¯",
    "¯\_▐ ☯ ︿ ☯ ▐_/¯",
    "¯\_(⊙︿⊙)_/¯",
    "＼⍩⃝／",
    "┐( ˘_˘)┌",
    "┐(￣ヘ￣)┌",
    "╮(╯-╰”)╭",
    "╮(╯ل͜╰)╭",
    "╮ (. ❛ ᴗ ❛.) ╭",
  ];
  const index = Math.floor(Math.random() * replies.length);
  ctx.reply(replies[index]);
}
