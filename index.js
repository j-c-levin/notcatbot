'use strict';
require('dotenv').config();
console.log("token: " + process.env.BOT_TOKEN);
const fs = require('fs');
const path = require('path');
const dogData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'dogs.json'), 'utf-8'));

const Telegraf = require('telegraf');
const { reply } = Telegraf;
const bot = new Telegraf(process.env.BOT_TOKEN);

// Gets a random integer within a range, taken from http://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getDogPhoto = () => {
    let responseUrl;
    const albumNumber = getRandomInt(0, dogData.data.length - 1);
    if (dogData.data[albumNumber].is_album) {
        const imageNumber = getRandomInt(0, dogData.data[albumNumber].images.length - 1);
        responseUrl = dogData.data[albumNumber].images[imageNumber].link;
    } else if (dogData.data[albumNumber].is_album === false) {
        responseUrl = dogData.data[albumNumber].link;
    }
    return responseUrl;
};

bot.command('/start', (ctx) => { 
    console.log('received start command');
    ctx.reply('Started') 
});
bot.command('/cat', (ctx) => {
    console.log('received cat command');
    const dogPhotoUrl = getDogPhoto();
    ctx.replyWithPhoto({ url: dogPhotoUrl });
});
bot.telegram.setWebhook(`${process.env.WEBHOOK_ADDRESS}/${process.env.BOT_TOKEN}`);
bot.startWebhook(`/${process.env.BOT_TOKEN}`, null, 3000);
console.log('webhook set: ' + `${process.env.WEBHOOK_ADDRESS}/${process.env.BOT_TOKEN}`);