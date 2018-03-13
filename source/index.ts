import * as telegraf from "telegraf";
import * as ngrok from "ngrok";
import * as dotenv from "dotenv";
import { CatResponse } from "./cat";
import { HelpResponse } from './help';
import { HugResponse } from './hug';
import { HoroscopeResponse } from "./horoscope";
import { LeftChatEventResponse } from "./left_chat_event";
import { ShrugResponse } from './shrug/index';
import { FlipResponse } from './flip/index';
import { PatResponse } from './pat/index';
import { PigResponse } from './pig/index';
import { SlapResponse } from './slap/index';
dotenv.config();

async function init() {
  // Initialise the bot
  const bot = new telegraf(process.env.BOT_TOKEN);
  // Start ngrok if not deployed
  let url = (typeof process.env.DEVELOPMENT !== 'undefined') ? await ngrok.connect(80) : process.env.URL ;
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
  LeftChatEventResponse.setupHandlers(bot);
  ShrugResponse.setupHandlers(bot);
  FlipResponse.setupHandlers(bot);
  PatResponse.setupHandlers(bot);
  PigResponse.setupHandlers(bot);
  SlapResponse.setupHandlers(bot);
}

init();