import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs'

@Injectable()
export class AppService {
  getHello(): string {
    return `API status on in ${dayjs().format('DD/MM/YYYY HH:MM:ss')}`;
  }
}
