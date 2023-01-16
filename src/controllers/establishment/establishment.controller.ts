import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EstablishmentService } from "./establishment.service";
import { CreateEstablishmentDTO } from "./interface/establishment.create.dto";
import { UpdateEstablishmentDTO } from "./interface/establishment.update.dto";

@ApiBearerAuth()
@Controller('establishment')
@ApiTags('Empresa')
export class EstablishmentController {
    constructor(private readonly service: EstablishmentService) { }

    logger = new Logger(EstablishmentController.name);

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ValidationPipe)
    @ApiResponse({
        status: 201,
        description: 'Rota responsavel por cadastrar um estabelecimento'
    })
    async create(@Body() body: CreateEstablishmentDTO) {
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
    async update(@Param("id") id: string, @Body() body: UpdateEstablishmentDTO) {
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