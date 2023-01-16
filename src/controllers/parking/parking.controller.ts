import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ParkingEntity } from "./entitty/parking.entity";
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
        description: 'Successfully parked vehicle'
    })
    @ApiResponse({
        status: 400,
        description: 'Vehicle already parked in another space'
    })
    @ApiResponse({
        status: 400,
        description: 'Establishment does not exist in the database'
    })
    @ApiResponse({
        status: 400,
        description: 'Vehicle does not exist in the database'
    })
    async entryParking(@Body() body: EntryParkingDTO) {
        try {
            return await this.service.entryParking(body);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }

    @Post('departure/:idParking')
    @ApiResponse({
        status: 201,
        description: 'Vehicle with output updated successfully'
    })
    @ApiResponse({
        status: 400,
        description: 'Vehicle not found in any space'
    })
    @ApiResponse({
        status: 400,
        description: 'Vehicle has already left the parking'
    })
    async departureParking(@Param('idParking') idParking: number) {
        try {
            return await this.service.departureParking(idParking);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }
}