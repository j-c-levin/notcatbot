# Not-Cat-Bot
Making a telegam bot that is definitely not a cat.  This is an april fools in-joke for the dollars chat group on telegram.

|Master   |Develop   |
|---|---|
|[![CircleCI](https://circleci.com/gh/j-c-levin/notcatbot.svg?style=svg)](https://circleci.com/gh/j-c-levin/notcatbot)   |[![CircleCI](https://circleci.com/gh/j-c-levin/notcatbot/tree/develop.svg?style=svg)](https://circleci.com/gh/j-c-levin/notcatbot/tree/develop)   |

# Installing

1) Download node and npm: https://nodejs.org/en/
2) Navigate to the root directory in a command line (with package.json)
3) Run `npm install`

# Development

## Set up environment variables
1) Create a .env file in the root directory
2) Populate it with the following fields: 
```
DEVELOPMENT=true
BOT_TOKEN=[your bot token from telegram's botfather]
PORT=80
SECRET_PATH=[some random string]
BOT_NAME=[the username of your bot on telegram]
```

## Run
1) Run `npm start`
2) Beging chatting to your chatbot on telegram

## Testing
* This is a to-do, come back soon.

## Additional notes

It may be a good idea to create two bots: one for production and one for development.  That way users of the official bot only see features when they're ready.

# Deployment

## Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You can run this yourself for absolutely free!  

1) Click the badge above
2) Sign in or sign up
3) Add your bot token in the space provided (you can always change this later but remember to restart your dyno if you do)
4) And...you're done!  

Heroku will spin up your bot, the bot will automatically register itself with telegram and should be good to use.

It's worth knowing that on the free tier you have a limited number of 'hours' to use, but this is really quite generous.  It's 550 hours by default and a total of 1000 hours a month if you give them payment details.  At those numbers, it's possible to run your bot for free indefinitely because that's more hours than there are in a month!  

However, those free hours are shared over your entire account so multiple free projects all eat into it.  In short, just understand how 'free' works so that you don't find your projects cutting out unexpectedly.

Additionally, free projects are 'shut down' after 30 minutes of inactivity.  In practice, this isn't as bad as it sounds.  I've found that on sending a request to my bot that has been shut down, it takes around 5 seconds for it to 'power on' again and after that it works great.  

If that performance break is a concern, you will need to upgrade to a paid tier or use a tool to ping the bot every so often to keep it alive.

Happy chatting.
