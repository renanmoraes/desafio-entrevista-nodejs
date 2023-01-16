import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VehiclesEntity } from "./entitty/vehicles.entity";
import { CreateVehiclesDTO } from "./interface/vehicles.create.dto";
import { UpdateVehiclesDTO } from "./interface/vehicles.update.dto";

@Injectable()
export class VehiclesService {
    private readonly logger = new Logger(VehiclesService.name);

    constructor(
        @InjectRepository(VehiclesEntity)
        private repository: Repository<VehiclesEntity>,
    ) { }

    async create(body: CreateVehiclesDTO) {
        const savingObject = await this.repository.create(body);
        await this.repository.save(savingObject);
        return savingObject;
    }

    async findAll(): Promise<CreateVehiclesDTO[]> {
        return await this.repository.find();
    }

    async findOne(id: number) {
        const Vehicles = await this.repository.findOneBy({ id });
        if (Vehicles) {
            return Vehicles;
        } else {
            throw new NotFoundException();
        }
    }

    async update(id: number, body: UpdateVehiclesDTO) {
        await this.repository.update(id, body);
        const savingObject = await this.repository.findOneBy({ id });
        if (savingObject) {
            return savingObject;
        }
        throw new NotFoundException();
    }

    async remove(empresa: number) {
        const deleteResponse = await this.repository.delete(empresa);
        if (!deleteResponse.affected) {
            throw new NotFoundException();
        }
        return true;
    }
}