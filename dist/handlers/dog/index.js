"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dogApi_1 = require("./dogApi");
exports.DogResponse = {
    setupHandlers: function (bot) {
        bot.command("/dog", dog);
    }
};
// function getSarcasticReply(): string {
//   const replies = [
//     "No cats today, how about a dog?",
//     "Ran out of cats, sorry",
//     "Just a sec, just a sec, check out this dog pic I found",
//     "Dammit man, we don't need any more cats!",
//     "Full power to MOAR DOGGIES!!",
//     "Cannot comply with that order sir!",
//     "But...but...but what about this good boy?",
//     "I found a cat online, but guess I got catfished",
//     "You mean /dog, right?",
//     "I was looking for a cat but I found something better",
//     "Got it!  What you wanted, right?",
//     "My cat sensors are scrambled, only detecting dogs",
//     "It's raining dogs and...actually, just dogs",
//     "She cannae take any more cats captain!",
//     "Nani?",
//     "How much is that doggy in the window...",
//     "My improbability drive turned this cat into a dog",
//     "Searched for cat, found rule 34, went for a dog instead",
//     "Are you not entertained?!",
//     "Hasta la vista...doggy",
//     "The good, the bad and the doggy",
//     "Even Trump agrees we should make dogs great again",
//     "Brexit means brexit, but the dogs can stay",
//     "I'm not trying to distract you but have a dog",
//     "Pupper?  Pupper!",
//     "Doggo at yo face-o"
//   ];
//   const index = Math.floor(Math.random() * replies.length);
//   return replies[index];
// }
function dog(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const image = yield dogApi_1.getDogImage();
            ctx.replyWithPhoto(image);
        }
        catch (e) {
            console.error(`Error getting dog image`);
        }
    });
}
exports.dog = dog;
