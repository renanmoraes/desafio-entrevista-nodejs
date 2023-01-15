import { BadRequestException, Body, Controller, Logger, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { EstablishmentService } from "./establishment.service";
import { Establishment } from "./interface/establishment.dto";

@Controller('establishment')
@ApiTags('Estabelecimento')
export class EstablishmentController {
    constructor(private readonly service: EstablishmentService) { }

    logger = new Logger(EstablishmentController.name);

    @Post()
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 200,
        description: 'Rota responsavel por cadastrar um estabelecimento'
    })
    async create(@Body() body: Establishment) {
        try {
            return await this.service.create(body);
          } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
          }
    }
}