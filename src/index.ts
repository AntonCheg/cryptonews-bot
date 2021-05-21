import { Bot } from './core/bot';
import { ConfigService } from './services/config.service';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

const init = async () => {
  ConfigService.initialize();

  const token = ConfigService.get<string>('TOKEN');

  await createConnection();

  const bot = new Bot(token);

  bot.start();
};

init();

// Example for use entity with Active Record pattern
/* 

  const user = new User();
  user.firstName = 'Dmitriy';
  user.lastName = 'Ozz';
  user.id = 1;

  await user.save();
*/
