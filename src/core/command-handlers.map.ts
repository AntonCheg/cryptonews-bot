import { CommandEnum } from 'src/enums/command.enum';
import { Context } from 'telegraf';

type HandlerFunctionType = (ctx: Context) => Promise<void>;

export const CommandHandlersMap = new Map<CommandEnum, HandlerFunctionType>().set(
  CommandEnum.TEST,
  async (ctx: Context) => {
    const chatId = await ctx.getChat().then((chat) => chat.id);
    ctx.telegram.sendMessage(chatId, `Hello ${ctx.state.role}`);
  },
);
