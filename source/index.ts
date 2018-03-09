import * as telegraf from "telegraf";
import * as ngrok from "ngrok";
import * as dotenv from "dotenv";
import { CatResponse } from "./cat/index";
dotenv.config();

async function init() {
  const bot = new telegraf(process.env.BOT_TOKEN);
  let url = (typeof process.env.DEVELOPMENT !== 'undefined') ? await ngrok.connect(80) : process.env.URL ;
  setupHandlers(bot);
  bot.telegram.setWebhook(url + "/secret");
  bot.startWebhook("/secret", null, 80);
  console.log("bot running");
}

function setupHandlers(bot: any): void {
  CatResponse.setupHandlers(bot);
}

init();