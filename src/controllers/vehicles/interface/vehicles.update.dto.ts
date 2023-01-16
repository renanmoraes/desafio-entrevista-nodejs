import { IsString, IsNotEmpty, MaxLength, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TypeVehicles } from 'src/core/enums/typeVehicles';

export class UpdateVehiclesDTO {

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'Fiat' })
    brand;

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'Renegade' })
    model;

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'Branca' })
    color;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'ABC1234' })
    license;

    @IsOptional()
    @IsString()
    @MaxLength(1)
    @ApiProperty({ example: 'C', enum: TypeVehicles })
    type: TypeVehicles;
}
