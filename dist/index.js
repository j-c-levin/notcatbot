"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botBuilder = require("claudia-bot-builder");
const dog_1 = require("./handlers/dog");
const index_1 = require("./handlers/chat_event/index");
module.exports = botBuilder((message) => {
    return (message.text !== '') ? routeCommand(message.text) : routeEvent(message.original);
}, { platforms: ['telegram'] });
function routeCommand(command) {
    switch (command) {
        case '/dog':
            return dog_1.dog();
        default:
    }
}
function routeEvent(command) {
    const request = command.originalRequest;
    // Enter chat event
    if (typeof request.new_chat_participant !== 'undefined') {
        return index_1.joinedChatEvent();
    }
    if (typeof request.left_chat_participant !== 'undefined') {
        return index_1.leftChatEvent();
    }
}
