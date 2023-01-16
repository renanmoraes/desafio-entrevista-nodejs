import { IsString, IsInt, IsNotEmpty, MaxLength, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { State } from 'src/core/enums/state';

export class CreateEstablishmentDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'RE Estabelecimento' })
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(14)
    @MaxLength(14)
    @ApiProperty({ example: '99999999999999' })
    cnpj: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(11)
    @MaxLength(11)
    @ApiProperty({ example: '99999999999' })
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(8)
    @ApiProperty({ example: '99999999' })
    cep: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: '99' })
    number: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ example: '', nullable: true })
    complement?: string | undefined;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'Rua' })
    street: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'Bairro' })
    district: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'Cidade' })
    city: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(2)
    @ApiProperty({ example: 'MG', enum: State })
    state: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'Pais' })
    country: string;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 10 })
    vacancyForMotorcycles: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 10 })
    vacancyForCars: number;

}
