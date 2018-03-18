import { spy } from 'sinon';
export interface TestCtx {
    from: {
        username: string
    };
    message: {
        reply_to_message: {
            from: {
                username: string
            }
        }
    };
    reply: sinon.SinonSpy;
}

export function createCtx(): TestCtx {
    const replySpy = spy();
    return {
        from: {
            username: 'testSender'
        },
        message: {
            reply_to_message: {
                from: {
                    username: 'testReceiver'
                }
            }
        },
        reply: replySpy
    };
}
