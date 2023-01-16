import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./interface/user.create.dto";

@Controller('user')
@ApiTags('Usuários')
export class UserController {
    constructor(private readonly service: UserService) { }

    logger = new Logger(UserController.name);

    @Post()
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 201,
        description: 'Rota responsavel por cadastrar um estabelecimento'
    })
    @ApiResponse({
        status: 400,
        description: 'Different password and confirm password'
    })
    async create(@Body() body: CreateUserDTO) {
        try {
            return await this.service.create(body);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }
}