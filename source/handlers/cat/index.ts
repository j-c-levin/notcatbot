import { getDogImage } from "./dogApi";

export const CatResponse = {
  setupHandlers: function (bot: any) {
    bot.hears("/cat", cat);
  }
};

function getSarcasticReply(): string {
  const replies = [
    "No cats today, how about a dog?",
    "Ran out of cats, sorry",
    "Just a sec, just a sec, check out this dog pic I found",
    "Dammit man, we don't need any more cats!",
    "Full power to MOAR DOGGIES!!",
    "Cannot comply with that order sir!",
    "But...but...but what about this good boy?",
    "I found a cat online, but guess I got catfished",
    "You mean /dog, right?",
    "I was looking for a cat but I found something better",
    "Got it!  What you wanted, right?",
    "My cat sensors are scrambled, only detecting dogs",
    "It's raining dogs and...actually, just dogs",
    "She cannae take any more cats captain!",
    "Nani?",
    "How much is that doggy in the window...",
    "My improbability drive turned this cat into a dog",
    "Searched for cat, found rule 34, went for a dog instead",
    "Are you not entertained?!",
    "Hasta la vista...doggy",
    "The good, the bad and the doggy",
    "Even Trump agrees we should make dogs great again",
    "Brexit means brexit, but the dogs can stay",
    "I'm not trying to distract you but have a dog",
    "Pupper?  Pupper!",
    "Doggo at yo face-o"
  ];
  const index = Math.floor(Math.random() * replies.length);
  return replies[index];
}

export async function cat(ctx) {
  try {
    const image = await getDogImage();
    ctx.replyWithPhoto(image);
    setTimeout(() => {
      ctx.reply(getSarcasticReply());
    }, 500);
  } catch (e) {
    console.error(`Error getting dog image`);
    ctx.reply("Couldn't find any cats. *shrug*");
  }
}
