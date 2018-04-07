import { getReplyUser } from "../../utils";

export const HugResponse = {
  setupHandlers: function (bot: any) {
    bot.command("/hug", hug);
    bot.command("/Hug", hug);
  }
};

export function hug(ctx) {
  const sender: string = ctx.from.username;
  const receiver: string = getReplyUser(ctx);
  const replies = [
    `${sender} felt unexpectedly happy and hi-fived ${receiver}`,
    `On a whim ${sender} gave ${receiver} a great big hug`,
    `${sender} glomped ${receiver}`,
    `${sender} -> (oﾟ▽ﾟ)o ⊂(・﹏・⊂) <- ${receiver}`,
    `${sender} -> ───==≡≡ΣΣ(> ^_^ )> （￣□￣；） <- ${receiver}`,
    `${sender} -> ─=≡Σ((( つ◕ل͜◕)つ （￣□￣；） <- ${receiver}`,
    `${sender} -> ─=≡Σ༼ つ ▀̿_▀̿ ༽つ （￣□￣；） <- ${receiver}`,
    `${sender} -> ～～(つˆДˆ)つﾉ>｡☆)ﾉ <- ${receiver}`,
    `${sender} -> ───==≡≡ΣΣ(っ´▽｀)っ （￣□￣；） <- ${receiver}`,
    `${sender} -> (>^_^)><(^o^<) <- ${receiver}`,
    `${sender} -> (/^.^(^.^*)> <- ${receiver}`,
    `${sender} -> (づ｡◕‿‿◕｡)づ ⊂(・▽・⊂) <- ${receiver}`,
    `${sender} -> c⌒っ╹v╹ )っ ⊂(´・ω・｀⊂) <- ${receiver}`,
    `${sender} -> (つ ͡° ͜ʖ ͡°)つ ⊂(´･◡･⊂ )∘˚˳° <- ${receiver}`,
    `${sender} -> ༼つ ் ▽ ் ༽つ ლ(･ω･*ლ) <- ${receiver}`,
    `${sender} -> (σ･з･)σ ヾ(‘c_’ヽ,,) <- ${receiver}`,
    `${sender} -> ღˇ◡ˇ(ᵕ꒶̮ᵕෆ <- ${receiver}`,
    `${sender} -> (￣ー￣(｡-_-｡*)ゝ <- ${receiver}`,
    `${sender} -> (●´Д｀)⊃⊂(´Д｀○) <- ${receiver}`,
    `${sender} -> (*･ω･)つ⊂(･ω･*) <- ${receiver}`,
    `${sender} -> 三 ( ◜◡‾)っ)⁰▿⁰)◜ <- ${receiver}`,
    `${sender} -> (~˘▾˘)~ ~(˘▾˘~) <- ${receiver}`,
    `${sender} -> (~˘▾˘)~ ~(˘▾˘~) <- ${receiver}`,
    `${sender} -> (ﾉ*’ω’*)ﾉ~~~~) ◜◡‾) <- ${receiver}`,
    `${sender} -> (●´Д｀)⊃⊂(´Д｀○) <- ${receiver}`,
    `${sender} -> (_＾∇＾)･_･)η <- ${receiver}`,
    `${sender} danced through the night with ${receiver}`,
    `${sender} whispered something secret and funny to ${receiver}`,
    `${sender} told ${receiver} how much they meant to them`,
    `${sender} found money on the floor and gave it to ${receiver}`,
    `${sender} came to visit ${receiver} when they were upset`,
    `${sender} surprised ${receiver} with a wholesome meme`,
    `${sender} let ${receiver} win at the game`,
    `${sender} shared their lunch with ${receiver}`,
    `${sender} took ${receiver} out for dinner`,
    `${sender} bought ${receiver} something tasty`,
    `${sender} let ${receiver} listen to their favourite song five times back to back`,
    `${sender} phoned ${receiver} and chatted about life`,
    `${sender} brought ${receiver} a good cup of tea`,
    `${sender} reminded ${receiver} that it was not all bad`,
    `${sender} sat through a bad film that ${receiver} wanted to watch`
  ];
  const index = Math.floor(Math.random() * replies.length);
  ctx.reply(replies[index]);
}
