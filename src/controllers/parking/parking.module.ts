import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishmentEntity } from '../establishment/entitty/establishment.entity';
import { VehiclesEntity } from '../vehicles/entitty/vehicles.entity';
import { ParkingEntity } from './entitty/parking.entity';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingEntity, EstablishmentEntity, VehiclesEntity])],
  providers: [ParkingService],
  controllers: [ParkingController],
})
export class ParkingModule {}
