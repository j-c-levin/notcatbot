"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botBuilder = require("claudia-bot-builder");
const telegramTemplate = botBuilder.telegramTemplate;
function leftChatEvent() {
    return `Crimson, you're up!`;
}
exports.leftChatEvent = leftChatEvent;
function joinedChatEvent() {
    return [
        `Hey, welcome to the dollars' telegram group!  I'm just a bot, but I'm sure others will welcome you in their own bizzare manner soon :)`,
        new telegramTemplate.Pause(500).get(),
        `We don't have many rules, mainly we just like to keep the chat drama free and SFW (Safe For Work).  Other than that, welcome and enjoy!`
    ];
}
exports.joinedChatEvent = joinedChatEvent;
