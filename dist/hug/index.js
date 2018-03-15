"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HugResponse = {
    setupHandlers: function (bot) {
        bot.hears("/hug", this.default);
    },
    default: function (ctx) {
        const sender = ctx.from.username;
        // If there's no @mention, use 'themselves'
        const receiver = typeof ctx.update.message.reply_to_message !== "undefined"
            ? ctx.update.message.reply_to_message.from.username
            : "themselves";
        // Response array of wholesome phrases
        const replies = [
            `${sender} felt unexpectedly happy and hi-fived ${receiver}`,
            `On a whim ${sender} gave ${receiver} a great big hug`,
            `${sender} glomped ${receiver}`,
            `${sender} -> (oﾟ▽ﾟ)o ⊂(・﹏・⊂) <- ${receiver}`,
            `${sender} -> ───==≡≡ΣΣ(> ^_^ )> （￣□￣；） <- ${receiver}`,
            `${sender} -> (>^_^)><(^o^<) <- ${receiver}`,
            `${sender} -> (/^.^(^.^*)> <- ${receiver}`,
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
};
//# sourceMappingURL=index.js.map