import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();


export function databaseConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get('MYSQL_HOST'),
    port: configService.get('MYSQL_PORT'),
    username: configService.get('MYSQL_USER'),
    password: configService.get('MYSQL_PASSWORD'),
    database: configService.get('MYSQL_DB'),
    entities: ['src/controllers/**/*entity{.ts,.js}'],
    synchronize: true
  };
}

