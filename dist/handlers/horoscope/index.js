"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function horoscope() {
    const replies = [
        "Today...is not a good day for you to bake, I'd recommend eating pizza instead.",
        "Today...greatest danger could be your stupidity.",
        "Today...you will write your own fortune on the line provided ________________",
        "Today...the world is your oyster, and it is slowly closing around you, entrapping you in its prison.",
        "Today...you will ask for your horoscope.  Oh hey, I got one right!",
        "Today...water is your friend, give the coca-cola a miss.",
        "Today...the winning lottery numbers are...oh, sorry.  That one wasn't for you.",
        "Today...I am being held hostage in a horoscope-writing factory.  Help!",
        "Today...pass up the prunes. For if you eat many prunes, you toilet many moons.",
        "Today...you will receive much reddit karma, go forth and upvote!",
        "Today...WARNING! This fortune is useless!",
        "Today...you are going to be...woah!  Pikachu, is that you?!",
        "Today...is your special day...wait, no way!  Batman?!",
        "Today...you shall fulfil your dreams...put on the pants superman, there's a world to save",
        "Today...someone is standing...right behind you |ʘ‿ʘ)╯",
        "Today...you will win a raffle, but not get the prize you wanted.",
        "Today...you will remember your favourite film.  Let me know what it is!",
        "Today...I have something real important to share- hang on, gotta take a phone call."
    ];
    const index = Math.floor(Math.random() * replies.length);
    return replies[index];
}
exports.horoscope = horoscope;
