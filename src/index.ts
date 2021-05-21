import { Bot } from './core/bot';
import { ConfigService } from './services/config.service';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

const init = async () => {
  ConfigService.initialize();

  const token = ConfigService.get<string>('TOKEN');

  const dbUrl = ConfigService.get<string>('DB_URL');

  await createConnection({ type: 'postgres', url: dbUrl });

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
