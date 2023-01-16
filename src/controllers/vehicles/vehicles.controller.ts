import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VehiclesService } from "./vehicles.service";
import { CreateVehiclesDTO } from "./interface/vehicles.create.dto";
import { UpdateVehiclesDTO } from "./interface/vehicles.update.dto";
import { AuthGuard } from "@nestjs/passport";

@ApiBearerAuth()
@Controller('vehicles')
@ApiTags('Veículos')
export class VehiclesController {
    constructor(private readonly service: VehiclesService) { }

    logger = new Logger(VehiclesController.name);

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 201,
        description: 'Rota responsavel por cadastrar um estabelecimento'
    })
    async create(@Body() body: CreateVehiclesDTO) {
        try {
            return await this.service.create(body);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 200,
        description: 'Rota responsavel por atualizar um estabelecimento'
    })
    async update(@Param("id") id: string, @Body() body: UpdateVehiclesDTO) {
        try {
            return await this.service.update(+id, body);
        } catch (error) {
            this.logger.error(error.message);
            throw new BadRequestException(error.message);
        }
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiResponse({
        status: 200,
        description: 'Rota responsavel por buscar todos estabelecimento'
    })
    async listAll() {
        try {
            return await this.service.findAll();
        } catch (error: any) {
            throw new BadRequestException(error.message);
        }
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiResponse({
        status: 200,
        description: 'Rota responsavel por buscar um estabelecimento pelo id'
    })
    async listOne(@Param("id") _id: number) {
        try {
            return await this.service.findOne(_id);
        } catch (error: any) {
            throw new BadRequestException(error.message);
        }
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 200,
        description: 'Rota responsavel por remover um estabelecimento pelo id'
    })
    async delete(@Param("id") _id: number) {
        try {
            let result = await this.service.remove(_id);
            return result
        } catch (error: any) {
            throw new BadRequestException(error.message);
        }
    }
}