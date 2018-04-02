"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipResponse = {
    setupHandlers: function (bot) {
        bot.hears("/flip", flip);
        bot.hears("/Flip", flip);
    }
};
function flip(ctx) {
    const replies = [
        "(╯°□°）╯︵ ┻━┻",
        "(ノಠ益ಠ)ノ彡┻━┻",
        "(ノ-_-)ノ・・・~~┻━┻",
        "ノ￣□￣)ノ ~┻━┻",
        "(ﾉ≧∇≦)ﾉ ﾐ ┸━┸",
        "(ノ°▽°)ノ︵┻━┻",
        "(┛◉Д◉)┛彡┻━┻",
        "༼ノಠل͟ಠ༽ノ ︵ ┻━┻",
        "(ノ｀Д´)ノ~┻━┻",
        "(ノ ﾟДﾟ)ノ　＝＝＝＝　┻━━┻",
        "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
        "┻━┻ ︵ ¯\ (ツ)/¯ ︵ ┻━┻",
        "(ノ-o-)ノ┸┸)`3゜)・;’.",
        "(ﾉ≧∇≦)ﾉ ﾐ ┸┸)`νﾟ)･;’.",
        "/( .□.) ︵╰(゜益゜)╯︵ /(.□. /)",
        "（╯°□°）╯︵( .o.)",
        "(╯°□°）╯︵ (\\ . 0 .)\\",
        "(╯°□°）╯︵ (\\ . 0 .)\\",
        "┬──┬ ︵(╯。□。）╯",
        "┬──┬╯︵ /(.□. \\）",
        "┬──┬ ︵(╯。□。）╯",
        "(╯°□°)╯︵ ʞooqǝɔɐℲ",
        "(∿°○°)∿ ︵ ǝʌol",
        "(╯°□°)╯︵ ʞɹoʍ",
        "(╯°□°)╯︵ ƃuıʎpnʇs",
        "(╯°□°)╯︵ sɯɐxǝ",
        "(╯°□°)╯︵ ɯɐɹbǝןǝʇ",
        "(╯°□°)╯︵ sɹɐןןop"
    ];
    const index = Math.floor(Math.random() * replies.length);
    ctx.reply(replies[index]);
}
exports.flip = flip;
//# sourceMappingURL=index.js.map