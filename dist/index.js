"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf = require("telegraf");
const ngrok = require("ngrok");
const dotenv = require("dotenv");
const cat_1 = require("./cat");
const help_1 = require("./help");
const hug_1 = require("./hug");
const horoscope_1 = require("./horoscope");
const chat_event_1 = require("./chat_event");
const index_1 = require("./shrug/index");
const index_2 = require("./flip/index");
const index_3 = require("./pat/index");
const index_4 = require("./pig/index");
const index_5 = require("./slap/index");
const index_6 = require("./shout/index");
const index_7 = require("./joshie/index");
dotenv.config();
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialise the bot
        const bot = new telegraf(process.env.BOT_TOKEN);
        bot.telegram.getMe().then((botInfo) => { bot.options.username = process.env.BOT_NAME; });
        // Start ngrok if not deployed
        const url = (typeof process.env.DEVELOPMENT !== 'undefined') ? yield ngrok.connect(80) : process.env.URL;
        // Set up the commands the bot will respond too
        setupHandlers(bot);
        // Set up and start the webhook
        bot.telegram.setWebhook(`${url}/${process.env.SECRET_PATH}`);
        bot.startWebhook(`/${process.env.SECRET_PATH}`, null, process.env.PORT);
        console.log("bot running");
    });
}
function setupHandlers(bot) {
    cat_1.CatResponse.setupHandlers(bot);
    help_1.HelpResponse.setupHandlers(bot);
    horoscope_1.HoroscopeResponse.setupHandlers(bot);
    hug_1.HugResponse.setupHandlers(bot);
    chat_event_1.ChatEventResponse.setupHandlers(bot);
    index_1.ShrugResponse.setupHandlers(bot);
    index_2.FlipResponse.setupHandlers(bot);
    index_3.PatResponse.setupHandlers(bot);
    index_4.PigResponse.setupHandlers(bot);
    index_5.SlapResponse.setupHandlers(bot);
    index_6.ShoutResponse.setupHandlers(bot);
    index_7.JoshieResponse.setupHandlers(bot);
}
init();
//# sourceMappingURL=index.js.map