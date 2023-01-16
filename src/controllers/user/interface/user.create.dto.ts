import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'admin' })
    user: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'a123' })
    password: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'a123' })
    confirmPassword: string;

}
