import { spy } from 'sinon';
export interface TestCtx {
    from: {
        username: string
    };
    message: {
        text: string;
        reply_to_message: {
            from: {
                username: string
            }
        }
    };
    reply: sinon.SinonSpy;
    replyWithHTML: sinon.SinonSpy;
    replyWithSticker: sinon.SinonSpy;
}

export function createCtx(): TestCtx {
    return {
        from: {
            username: 'testSender'
        },
        message: {
            text: 'hello world',
            reply_to_message: {
                from: {
                    username: 'testReceiver'
                }
            }
        },
        reply: spy(),
        replyWithHTML: spy(),
        replyWithSticker: spy()
    };
}

export function getReplyUser(ctx: any): string {
    const receiver: string =
    typeof ctx.message.reply_to_message !== "undefined"
      ? ctx.message.reply_to_message.from.username || ctx.message.reply_to_message.from.first_name
      : "themselves";
      return receiver;
}
