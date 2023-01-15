import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(configService.get('PORT'), '0.0.0.0');
  logger.log(`Service is listening on port ${configService.get('PORT')}`);
}
bootstrap();
