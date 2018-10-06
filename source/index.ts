import * as botBuilder from 'claudia-bot-builder';
import { dog } from './handlers/dog';
import { joinedChatEvent, leftChatEvent } from './handlers/chat_event/index';
import { flip } from './handlers/flip';
import { horoscope } from './handlers/horoscope';
import { shrug } from './handlers/shrug';

module.exports = botBuilder((message) => {
    return (message.text !== '') ? routeCommand(message.text) : routeEvent(message.originalRequest);
}, { platforms: ['telegram'] });

function routeCommand(command): any {
    // Regex is returning an array of matches, so we want to compare if one is not null
    switch (true) {
        case command.match(/^\/dog$/i) !== null:
            return dog();
        case command.match(/^\/superflip$/i) !== null:
            return flip();
        case command.match(/^\/horoscope$/i) !== null:
            return horoscope();
        case command.match(/^\/shrug$/i) !== null:
            return shrug();
        default:
        // Do nothing
    }
}

function routeEvent(command): any {
    const request = command.message;
    // Enter chat event
    if (typeof request.new_chat_participant !== 'undefined') {
        return joinedChatEvent();
    }

    if (typeof request.left_chat_participant !== 'undefined') {
        return leftChatEvent();
    }
}
