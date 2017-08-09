'use strict';
require('dotenv').config();

const Telegraf = require('telegraf');
const { reply } = Telegraf;

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command('/start', (ctx) => ctx.reply('Started'));
bot.command('/cat', (ctx) => ctx.reply('No. No cats.'));
bot.startPolling();