import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as dayjs from "dayjs";
import { Repository } from "typeorm";
import { EstablishmentEntity } from "../establishment/entitty/establishment.entity";
import { VehiclesEntity } from "../vehicles/entitty/vehicles.entity";
import { ParkingEntity } from "./entitty/parking.entity";
import { EntryParkingDTO } from "./interface/parking.entry.dto";

@Injectable()
export class ParkingService {
    private readonly logger = new Logger(ParkingService.name);

    constructor(
        @InjectRepository(ParkingEntity)
        private repository: Repository<ParkingEntity>,
        @InjectRepository(EstablishmentEntity)
        private repositoryEstablishment: Repository<EstablishmentEntity>,
        @InjectRepository(VehiclesEntity)
        private repositoryVehicle: Repository<VehiclesEntity>,
    ) { }


    async entryParking(body: EntryParkingDTO) {
        const haveEntry = await this.repository.findAndCountBy({ establishment: { id: body.establishment }, vehicle: { id: body.vehicle } });

        if (haveEntry[1] !== 0)
            throw new BadRequestException('Vehicle already parked in another space');

        const estabilishment = await this.repositoryEstablishment.findOneBy({ id: body.establishment });

        if (!estabilishment)
            throw new BadRequestException('Establishment does not exist in the database');

        const vehicle = await this.repositoryVehicle.findOneBy({ id: body.vehicle });

        if (!vehicle)
            throw new BadRequestException('Vehicle does not exist in the database');


        const entry = { entryDate: dayjs().format('YYYY-MM-DD HH:mm'), vacancyNumber: body.vacancyNumber }
        const createEntry = await this.repository.create(entry);
        createEntry.establishment = estabilishment;
        createEntry.vehicle = vehicle;
        await this.repository.save(createEntry);
        return createEntry;
    }
}