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
const dog_1 = require("./handlers/dog");
const help_1 = require("./handlers/help");
const hug_1 = require("./handlers/hug");
const horoscope_1 = require("./handlers/horoscope");
const chat_event_1 = require("./handlers/chat_event");
const shrug_1 = require("./handlers/shrug");
const flip_1 = require("./handlers/flip");
const pat_1 = require("./handlers/pat");
const pig_1 = require("./handlers/pig");
const funslap_1 = require("./handlers/funslap");
dotenv.config();
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialise the bot
        const bot = new telegraf(process.env.BOT_TOKEN);
        bot.telegram.getMe().then(() => { bot.options.username = process.env.BOT_NAME; });
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
    dog_1.DogResponse.setupHandlers(bot);
    help_1.HelpResponse.setupHandlers(bot);
    horoscope_1.HoroscopeResponse.setupHandlers(bot);
    hug_1.HugResponse.setupHandlers(bot);
    chat_event_1.ChatEventResponse.setupHandlers(bot);
    shrug_1.ShrugResponse.setupHandlers(bot);
    flip_1.FlipResponse.setupHandlers(bot);
    pat_1.PatResponse.setupHandlers(bot);
    pig_1.PigResponse.setupHandlers(bot);
    funslap_1.FunSlapResponse.setupHandlers(bot);
}
init();
//# sourceMappingURL=index.js.map