import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Health Check')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Rota responsavel por checar o status da aplicação'
})
  getHello(): string {
    return this.appService.getHello();
  }
}
