import * as botBuilder from 'claudia-bot-builder';
import { dog } from './handlers/dog';
import { joinedChatEvent, leftChatEvent } from './handlers/chat_event/index';

module.exports = botBuilder((message) => {
    return (message.text !== '') ? routeCommand(message.text) : routeEvent(message.original);
}, { platforms: ['telegram'] });

function routeCommand(command): any {
    switch (command) {
        case '/dog':
            return dog();
        default:
        // Do nothing
    }
}

function routeEvent(command): any {
    return JSON.stringify(command);
    const request = command.originalRequest;
    // Enter chat event
    if (typeof request.new_chat_participant !== 'undefined') {
        return joinedChatEvent();
    }

    if (typeof request.left_chat_participant !== 'undefined') {
        return leftChatEvent();
    }
}
