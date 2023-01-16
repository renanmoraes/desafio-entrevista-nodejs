import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import * as timezone from "dayjs/plugin/timezone";


const logger = new Logger('Main');

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Dr Consulta')
    .setDescription('API Rest Dr Consulta v1')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();

  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault("America/Sao_Paulo")

  await app.listen(configService.get('PORT'), '0.0.0.0');
  logger.log(`Service is listening on port ${configService.get('PORT')}`);
}
bootstrap();
