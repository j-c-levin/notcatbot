"use strict";
var builder = require("botbuilder");
var botbuilder_azure = require("botbuilder-azure");
var path = require('path');

var useEmulator = (process.env.NODE_ENV == 'development');

var connector = useEmulator ? new builder.ChatConnector() : new botbuilder_azure.BotServiceConnector({
    appId: process.env['MicrosoftAppId'],
    appPassword: process.env['MicrosoftAppPassword'],
    stateEndpoint: process.env['BotStateEndpoint'],
    openIdMetadata: process.env['BotOpenIdMetadata']
});

var bot = new builder.UniversalBot(connector);
bot.localePath(path.join(__dirname, './locale'));

bot.dialog('/start', function (session) {
    session.endDialog('Started');
})
    .triggerAction({
        matches: /^\/start$/i
    });

bot.dialog('cat', function (session) {
    var message = new builder.Message(session)
        .addAttachment({
            contentUrl: 'http://i.imgur.com/yQQSiHB.jpg',
            contentType: 'image/png'
        });
    session.endConversation(message);
})
    .triggerAction({
        matches: /^\/cat$/i
    });

bot.dialog('/', function (session) {
    // do nothing
});

if (useEmulator) {
    var restify = require('restify');
    var server = restify.createServer();
    server.listen(3978, function () {
        console.log('test bot endpont at http://localhost:3978/api/messages');
    });
    server.post('/api/messages', connector.listen());
} else {
    module.exports = { default: connector.listen() }
}
