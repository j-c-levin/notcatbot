'use strict';
const fs = require('fs');
const path = require('path');
const imageData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'parsed_images.json'), 'utf-8'));

// Gets a random integer within a range, taken from http://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    getDogPhoto : () => {
        const imageNumber = getRandomInt(0, imageData.length - 1);
        console.log('number: ' + imageNumber + ' link: ' + imageData[imageNumber].link);
        return imageData[imageNumber].link;
    }
}