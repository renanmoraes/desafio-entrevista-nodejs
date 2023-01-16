import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesEntity } from './entitty/vehicles.entity';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehiclesEntity])],
  providers: [VehiclesService],
  controllers: [VehiclesController],
})
export class VehiclesModule {}
