'use strict';
const fs = require('fs');
const path = require('path');

// Assumes the file to be read from is a postman response copy from imgur api
const fileToBeReadFrom = 'dogs.json';
const mainDataFile = 'parsed_images.json';

const getFileAsJson = (filepath) => {
    return JSON.parse(
        fs.readFileSync(path.resolve(__dirname, filepath), 'utf-8')
    );
};

const imageFile = getFileAsJson(mainDataFile);
let dataToBeParsed = getFileAsJson(fileToBeReadFrom).data;

const getImages = (data) => {
    if (data.is_album) {
        return data.images.map((image) => {
            return image.link;
        });
    } else {
        return [data.link];
    }
};

const isInArray = (objectToInsert) => {
    return imageFile.filter((image) => {
        return image.link === objectToInsert.link;
    }).length > 0;
};

dataToBeParsed.forEach((image) => {
    let images = getImages(image);
    images.forEach((imageUrl) => {
        let imageObject = { link: imageUrl };
        // Only insert if this image does not already exist
        if (isInArray(imageObject) === false) {
            imageFile.push(imageObject);
        }
    });
});

console.log('number of images now: ' + imageFile.length);

// Write the file back out
fs.writeFile(mainDataFile, JSON.stringify(imageFile, null, 2));