'use strict';
require('dotenv').config();
const Telegraf = require('telegraf');

const app = new Telegraf(process.env.BOT_TOKEN);
app.telegram.getMe().then((botInfo) => {
  app.options.username = botInfo.username
})
app.command('start', ({ from, reply }) => reply('Welcome!'));
app.hears('hi', (ctx) => ctx.reply('Hey there!'));
app.hears('/cat', (ctx) => ctx.reply('No.'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();