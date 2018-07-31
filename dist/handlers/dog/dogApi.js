"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
function getDogImage() {
    return new Promise((resolve, reject) => {
        request
            .get('https://dog.ceo/api/breeds/image/random')
            .end((err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res.body.message);
        });
    });
}
exports.getDogImage = getDogImage;
