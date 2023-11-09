import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //app.get("/")
  getHello(): string {
    return this.appService.getHello(); //res.send('Hello World!') //return {status:"success"}
  }
}
