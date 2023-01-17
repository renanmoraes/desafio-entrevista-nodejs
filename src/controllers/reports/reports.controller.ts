import { Body, Controller, Logger, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SearchDTO } from "./interface/search.dto";
import { ReportsService } from "./reports.service";

@ApiBearerAuth()
@Controller('reports')
@ApiTags('Relatórios')
export class ReportsController {
    constructor(private readonly service: ReportsService) { }

    logger = new Logger(ReportsController.name);

    @Post('quantity-entry-and-departure')
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 201,
        description: 'Successfully parked vehicle'
    })
    async quantityEntryAndDeparture(@Body() body: SearchDTO) {
        return this.service.quantityEntryAndDeparture(body);
    }
}