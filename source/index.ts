import * as telegraf from "telegraf";
import * as ngrok from "ngrok";
import * as dotenv from "dotenv";
import { CatResponse } from "./handlers/cat";
import { HelpResponse } from './handlers/help';
import { HugResponse } from './handlers/hug';
import { HoroscopeResponse } from "./handlers/horoscope";
import { ChatEventResponse } from "./handlers/chat_event";
import { ShrugResponse } from './handlers/shrug';
import { FlipResponse } from './handlers/flip';
import { PatResponse } from './handlers/pat';
import { PigResponse } from './handlers/pig';
import { SlapResponse } from './handlers/slap';
import { ShoutResponse } from './handlers/shout';
import { JoshieResponse } from './handlers/joshie';
dotenv.config();

async function init() {
  // Initialise the bot
  const bot = new telegraf(process.env.BOT_TOKEN);
  bot.telegram.getMe().then(() => { bot.options.username = process.env.BOT_NAME; });
  // Start ngrok if not deployed
  const url = (typeof process.env.DEVELOPMENT !== 'undefined') ? await ngrok.connect(80) : process.env.URL;
  // Set up the commands the bot will respond too
  setupHandlers(bot);
  // Set up and start the webhook
  bot.telegram.setWebhook(`${url}/${process.env.SECRET_PATH}`);
  bot.startWebhook(`/${process.env.SECRET_PATH}`, null, process.env.PORT);
  console.log("bot running");
}

function setupHandlers(bot: any): void {
  CatResponse.setupHandlers(bot);
  HelpResponse.setupHandlers(bot);
  HoroscopeResponse.setupHandlers(bot);
  HugResponse.setupHandlers(bot);
  ChatEventResponse.setupHandlers(bot);
  ShrugResponse.setupHandlers(bot);
  FlipResponse.setupHandlers(bot);
  PatResponse.setupHandlers(bot);
  PigResponse.setupHandlers(bot);
  SlapResponse.setupHandlers(bot);
  ShoutResponse.setupHandlers(bot);
  JoshieResponse.setupHandlers(bot);
}

init();
