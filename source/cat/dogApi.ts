import * as request from "superagent";

export function getDogImage(): Promise<string> {
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
