import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './controllers/authorization/authorization.module';
import { EstablishmentModule } from './controllers/establishment/establishment.module';
import { ParkingModule } from './controllers/parking/parking.module';
import { UserModule } from './controllers/user/user.module';
import { VehiclesModule } from './controllers/vehicles/vehicles.module';
import { DatabaseModule } from './core/database/database.module';
import { JwtStrategy } from './core/utils/Jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number(),
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DB: Joi.string().required(),
        JWT_SECRET: Joi.string().required()
      }),
    }),
    DatabaseModule,
    EstablishmentModule,
    VehiclesModule,
    ParkingModule,
    UserModule,
    AuthorizationModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule { }
