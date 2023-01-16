import { IsString, IsInt, IsNotEmpty, MaxLength, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { State } from 'src/core/enums/state';

export class UpdateEstablishmentDTO {
    @IsOptional()
    @IsString()
    @MaxLength(250)
    @ApiProperty({ example: 'RE Estabelecimento Atualizado', nullable: true })
    name?: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(14)
    @MaxLength(14)
    @ApiProperty({ example: '99999999999999' })
    cnpj: string;

    @IsOptional()
    @IsString()
    @MaxLength(11)
    @ApiProperty({ example: '99999999999', nullable: true })
    phone?: string;

    @IsOptional()
    @IsString()
    @MaxLength(8)
    @ApiProperty({ example: '99999999', nullable: true })
    cep?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: '99', nullable: true })
    number?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ example: '', nullable: true })
    complement?: string | undefined;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: 'Rua', nullable: true })
    street?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: 'Bairro', nullable: true })
    district?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: 'Cidade', nullable: true })
    city?: string;

    @IsOptional()
    @IsString()
    @MaxLength(2)
    @ApiProperty({ example: 'MG', enum: State, nullable: true })
    state?: State;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: 'Pais', nullable: true })
    country?: string;

    @IsOptional()
    @IsInt()
    @ApiProperty({ example: 10, nullable: true })
    vacancyForMotorcycles?: number;

    @IsOptional()
    @IsInt()
    @ApiProperty({ example: 10, nullable: true })
    vacancyForCars?: number | null;

}
