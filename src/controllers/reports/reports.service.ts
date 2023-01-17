import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as dayjs from "dayjs";
import { formatDate } from "src/core/utils/formatDate";
import { Between, MoreThanOrEqual, Repository, LessThanOrEqual } from "typeorm";
import { EstablishmentEntity } from "../establishment/entitty/establishment.entity";
import { ParkingEntity } from "../parking/entitty/parking.entity";
import { VehiclesEntity } from "../vehicles/entitty/vehicles.entity";
import { SearchDTO } from "./interface/search.dto";

@Injectable()
export class ReportsService {
    private readonly logger = new Logger(ReportsService.name);

    constructor(
        @InjectRepository(ParkingEntity)
        private repository: Repository<ParkingEntity>,
        @InjectRepository(EstablishmentEntity)
        private repositoryEstablishment: Repository<EstablishmentEntity>,
        @InjectRepository(VehiclesEntity)
        private repositoryVehicle: Repository<VehiclesEntity>,
    ) { }

    async quantityEntryAndDeparture(body: SearchDTO) {
        let where = {};

        if (body.start && body.end)
            where = { ...where, entryDate: MoreThanOrEqual(formatDate(body.start, 'init')), departureDate: LessThanOrEqual(formatDate(body.end, 'finish')) }

        else if (body.start)
            where = { ...where, entryDate: Between(formatDate(body.start, 'init'), formatDate(body.start, 'finish')) }

        else if (body.end)
            where = { ...where, departureDate: Between(formatDate(body.end, 'init'), formatDate(body.end, 'finish')) }
            
        return await this.repository.find({ relations: ['establishment', 'vehicle'], where: where })
    }
}