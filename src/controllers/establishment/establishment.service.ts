import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EstablishmentEntity } from "./entitty/establishment.entity";
import { Establishment } from "./interface/establishment.dto";

@Injectable()
export class EstablishmentService {
    private readonly logger = new Logger(EstablishmentService.name);

    constructor(
        @InjectRepository(EstablishmentEntity)
        private repository: Repository<EstablishmentEntity>,
    ) { }

    async create(body: Establishment) {
        const savingObject = await this.repository.create(body);
        await this.repository.save(savingObject);
        return savingObject;
    }
}