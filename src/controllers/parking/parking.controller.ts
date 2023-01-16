import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { EntryParkingDTO } from "./interface/parking.entry.dto";
import { ParkingService } from "./parking.service";

@Controller('parking')
@ApiTags('Estacionamento')
export class ParkingController {
    constructor(private readonly service: ParkingService) { }

    logger = new Logger(ParkingController.name);

    @Post('entry')
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 201,
        description: 'Rota responsavel por registrar um carro a uma vaga'
    })
    async entryParking(@Body() body: EntryParkingDTO) {
        try {
            return await this.service.entryParking(body);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }
}