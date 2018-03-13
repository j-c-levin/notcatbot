# Not-Cat-Bot
Making a telegam bot that is definitely not a cat

|Master   |Develop   |
|---|---|
|[![CircleCI](https://circleci.com/gh/j-c-levin/notcatbot.svg?style=svg)](https://circleci.com/gh/j-c-levin/notcatbot)   |[![CircleCI](https://circleci.com/gh/j-c-levin/notcatbot/tree/develop.svg?style=svg)](https://circleci.com/gh/j-c-levin/notcatbot/tree/develop)   |

# Installing

1) Download node and npm: https://nodejs.org/en/
2) Navigate to the root directory in a command line (with package.json)
3) Run npm install

# Development

## Set up environment variables
1) Create a .env file in the root directory
2) Populate it with the following fields: 
    * DEVELOPMENT=true
    * BOT_TOKEN=[your bot token from telegram's botfather]
    * PORT=80
    * SECRET_PATH=[some random string]

## Run
1) Run npm start
2) Beging chatting to your chatbot on telegram

## Testing
* This is a to-do, come back soon.

# Deployment

## Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)