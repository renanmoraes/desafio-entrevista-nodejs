import { IsString, IsNotEmpty, MaxLength, MinLength, IsInt, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TypeVehicles } from 'src/core/enums/typeVehicles';

export class EntryParkingDTO {

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 1 })
    establishment: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 1 })
    vehicle: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ example: 10 })
    vacancyNumber: number;
}