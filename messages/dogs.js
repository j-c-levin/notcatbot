'use strict';
const fs = require('fs');
const path = require('path');
const dogData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'dogs.json'), 'utf-8'));

// Gets a random integer within a range, taken from http://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    getDogPhoto : () => {
        let responseUrl;
        const albumNumber = getRandomInt(0, dogData.data.length - 1);
        if (dogData.data[albumNumber].is_album) {
            const imageNumber = getRandomInt(0, dogData.data[albumNumber].images.length - 1);
            responseUrl = dogData.data[albumNumber].images[imageNumber].link;
        } else if (dogData.data[albumNumber].is_album === false) {
            responseUrl = dogData.data[albumNumber].link;
        }
        return responseUrl;
    }
}