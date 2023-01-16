import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthorizationService } from "./authorization.service";
import { AuthorizationDTO } from "./interface/authorization.create.dto";

@Controller('authorization')
@ApiTags('Autorização')
export class AuthorizationController {
    constructor(private readonly service: AuthorizationService) { }

    logger = new Logger(AuthorizationController.name);

    @Post('login')
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 201,
        description: 'Login success'
    })
    @ApiResponse({
        status: 400,
        description: 'Password does not match'
    })
    async login(@Body() body: AuthorizationDTO) {
        try {
            return await this.service.login(body);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }
}