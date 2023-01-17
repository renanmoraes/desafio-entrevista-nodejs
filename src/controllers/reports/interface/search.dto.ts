import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import * as dayjs from 'dayjs';

export class SearchDTO {

    @IsOptional()
    @IsString()
    @ApiProperty({ example: dayjs().format('YYYY-MM-DD') })
    start: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: dayjs().format('YYYY-MM-DD') })
    end: string;
}