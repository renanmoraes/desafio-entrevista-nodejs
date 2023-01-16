import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstablishmentModule } from './controllers/establishment/establishment.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      PORT: Joi.number(),
      MYSQL_HOST: Joi.string().required(),
      MYSQL_PORT: Joi.number().required(),
      MYSQL_USER: Joi.string().required(),
      MYSQL_PASSWORD: Joi.string().required(),
      MYSQL_DB: Joi.string().required()
    }),
  }),
    DatabaseModule,
    EstablishmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
