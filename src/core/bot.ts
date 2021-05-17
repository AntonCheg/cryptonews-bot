import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { CommandHandlersMap } from './command-handlers.map';
export class Bot {
  private readonly _bot: Telegraf<Context<Update>>;

  constructor(token: string) {
    this._bot = new Telegraf(token);
    this.registerCommandHandlers();
  }

  public start() {
    this._bot.launch();
  }

  public stop() {
    this._bot.stop();
  }

  private registerCommandHandlers() {
    for (const [key, value] of CommandHandlersMap) {
      this._bot.command(key, value);
    }
  }
}
