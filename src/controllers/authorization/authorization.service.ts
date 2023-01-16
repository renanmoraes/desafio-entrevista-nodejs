import { Injectable, Logger, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { comparePassword } from "src/core/utils/password";
import { Repository } from "typeorm";
import { UserEntity } from "../user/entitty/user.entity";
import { AuthorizationDTO } from "./interface/authorization.create.dto";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationService {
    private readonly logger = new Logger(AuthorizationService.name);

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
        private jwtService: JwtService
    ) { }

    async login(body: AuthorizationDTO) {
        const haveUser = await this.repository.findOne({ where: { user: body.user }, select: { password: true } });

        if (!haveUser)
            throw new NotFoundException('User not found')

        if (!await comparePassword(body.password, haveUser.password))
            throw new UnauthorizedException();


        return {
            user: body.user,
            token: this.jwtService.sign({ user: body.user })
        }
    }
}