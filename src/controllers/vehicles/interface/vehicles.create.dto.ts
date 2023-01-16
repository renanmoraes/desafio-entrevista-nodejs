import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TypeVehicles } from 'src/core/enums/typeVehicles';

export class CreateVehiclesDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'Fiat' })
    brand;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({ example: 'Renegade' })
    model;

    @IsNotEmpty()
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

    @IsNotEmpty()
    @IsString()
    @MaxLength(1)
    @ApiProperty({ example: 'C', enum: TypeVehicles })
    type: TypeVehicles;
}
