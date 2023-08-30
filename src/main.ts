import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EmojiLogger } from './emoji-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new EmojiLogger(),
  });
  await app.listen(3000);
}
bootstrap();
