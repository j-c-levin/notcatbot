import * as dotenv from "dotenv";
import * as botBuilder from 'claudia-bot-builder';
dotenv.config();

module.exports = botBuilder((request) => {
  return 'hello world, ' + request.text;
});
