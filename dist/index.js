"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botBuilder = require("claudia-bot-builder");
const dog_1 = require("./handlers/dog");
const index_1 = require("./handlers/chat_event/index");
const flip_1 = require("./handlers/flip");
const horoscope_1 = require("./handlers/horoscope");
const shrug_1 = require("./handlers/shrug");
module.exports = botBuilder((message) => {
    return (message.text !== '') ? routeCommand(message.text) : routeEvent(message.originalRequest);
}, { platforms: ['telegram'] });
function routeCommand(command) {
    // Regex is returning an array of matches, so we want to compare if one is not null
    switch (true) {
        case command.match(/^\/dog$/i) !== null:
            return dog_1.dog();
        case command.match(/^\/superflip$/i) !== null:
            return flip_1.flip();
        case command.match(/^\/horoscope$/i) !== null:
            return horoscope_1.horoscope();
        case command.match(/^\/shrug$/i) !== null:
            return shrug_1.shrug();
        default:
    }
}
function routeEvent(command) {
    const request = command.message;
    // Enter chat event
    if (typeof request.new_chat_participant !== 'undefined') {
        return index_1.joinedChatEvent();
    }
    if (typeof request.left_chat_participant !== 'undefined') {
        return index_1.leftChatEvent();
    }
}
