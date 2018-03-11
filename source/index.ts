import * as telegraf from "telegraf";
import * as ngrok from "ngrok";
import * as dotenv from "dotenv";
import { CatResponse } from "./cat/index";
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
}

init();