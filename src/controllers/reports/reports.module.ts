import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishmentEntity } from '../establishment/entitty/establishment.entity';
import { ParkingEntity } from '../parking/entitty/parking.entity';
import { VehiclesEntity } from '../vehicles/entitty/vehicles.entity';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingEntity, EstablishmentEntity, VehiclesEntity])],
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsModule {}
