import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService = new AppService();
  constructor() {}

  @Get('liquid')
  @Render('home/index.liquid')
  getLiquid() {
    return { message: 'Hello Liquid!' };
  }

  @Get()
  @Render('home/index.liquid')
  getHello() {
    return { message: 'Hello world!' };
  }
}
