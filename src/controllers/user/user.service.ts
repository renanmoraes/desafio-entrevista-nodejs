import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { encryptPassowrd } from "src/core/utils/password";
import { Repository } from "typeorm";
import { UserEntity } from "./entitty/user.entity";
import { CreateUserDTO } from "./interface/user.create.dto";

@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) { }

    async create(body: CreateUserDTO) {

        if (body.password !== body.confirmPassword)
            throw new BadRequestException('Different password and confirm password');

        body.password = await encryptPassowrd(body.password);

        const savingObject = await this.repository.create(body);
        await this.repository.save(savingObject);
        return savingObject;
    }
}