import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EstablishmentEntity } from "./entitty/establishment.entity";
import { CreateEstablishmentDTO } from "./interface/establishment.create.dto";
import { UpdateEstablishmentDTO } from "./interface/establishment.update.dto";

@Injectable()
export class EstablishmentService {
    private readonly logger = new Logger(EstablishmentService.name);

    constructor(
        @InjectRepository(EstablishmentEntity)
        private repository: Repository<EstablishmentEntity>,
    ) { }

    async create(body: CreateEstablishmentDTO) {
        const savingObject = await this.repository.create(body);
        await this.repository.save(savingObject);
        return savingObject;
    }

    async findAll(): Promise<CreateEstablishmentDTO[]> {
        return await this.repository.find();
    }

    async findOne(id: number) {
        const Establishment = await this.repository.findOneBy({ id });
        if (Establishment) {
            return Establishment;
        } else {
            throw new NotFoundException();
        }
    }

    async update(id: number, body: UpdateEstablishmentDTO) {
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