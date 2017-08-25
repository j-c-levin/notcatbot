'use strict';
const builder = require("botbuilder");
const dogImages = require('./dogs');

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const messageArray = [
    `Don't feel like it`,
    'Later',
    'Nah',
    `Don't want to`,
    'Make me',
    'No.',
    `How about in 5 minutes?`,
    'Why should I?',
    `Can't be bothered`,
    'Get it yourself',
    `I don't care`,
    'Cat yourself',
    `I'm tired, okay?`,
    'Give me a break',
    'How about no',
    'Not my problem',
    'Have you tried asking someone who cares?',
    'Ask nicely',
    'Please?',
    'Cat, please?',
    `I'm watching twitch, don't interrupt`,
    'Everytime you say cat, a cat dies',
    `I don't like you very much`,
    `I'm sorry, I only respond to important people`
];

const getAnimalPicture = (session) => {
    const dogImage = dogImages.getDogPhoto();
    const message = new builder.Message(session)
        .addAttachment({
            contentUrl: dogImage,
            contentType: 'image/png'
        });
    return message;
}

module.exports = {
    createMessage: (session) => {
        const messageChoice = getRandomInt(0, 10);
        // 20% probability of sending a message
        if (messageChoice <= 2) {
            const index = getRandomInt(0, messageArray.length - 1);
            return messageArray[index];
        } else {
            return getAnimalPicture(session);
        }
    }
};