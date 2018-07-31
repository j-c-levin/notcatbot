"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botBuilder = require("claudia-bot-builder");
// module.exports = botBuilder((request) => {
//   return 'hello world, ' + request.text;
// }, { platforms: ['telegram'] });
const telegramTemplate = botBuilder.telegramTemplate;
module.exports = botBuilder(() => new telegramTemplate.Photo('https://claudiajs.com/assets/claudiajs.png').get(), { platforms: ['telegram'] });
