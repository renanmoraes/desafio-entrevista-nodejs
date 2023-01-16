import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entitty/user.entity';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: '8h' },
        };
      },
      inject: [ConfigService],
    })],
  providers: [AuthorizationService],
  controllers: [AuthorizationController],
})
export class AuthorizationModule { }
