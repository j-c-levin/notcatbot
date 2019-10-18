import * as botBuilder from 'claudia-bot-builder';
const telegramTemplate = botBuilder.telegramTemplate;

export function leftChatEvent() {
  return `Crimson, you're up!`;
}

export function joinedChatEvent(): string[] {
  return [
    new telegramTemplate.Pause(5000).get(),
    `Hey, welcome to the dollars' telegram group!  I'm just a bot, but I'm sure others will welcome you in their own bizzare manner soon :)`,
    new telegramTemplate.Pause(500).get(),
    `We don't have many rules, mainly we just like to keep the chat drama free and SFW (Safe For Work).  Other than that, welcome and enjoy!`
  ];
}
