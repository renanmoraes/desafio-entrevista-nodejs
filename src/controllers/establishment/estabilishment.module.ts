import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishmentEntity } from './entitty/establishment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstablishmentEntity])],
  providers: [],
  controllers: [],
})
export class EstabilishmentModule {}
