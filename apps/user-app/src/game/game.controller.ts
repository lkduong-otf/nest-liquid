import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class GameController {
  constructor() {}

  @Get()
  @Render('user/index.liquid')
  getLiquid() {
    return {
      message: 'Hello users!',
      users: [
        { name: 'Adams', age: 25 },
        { name: 'Steven', age: 28 }
      ]
    };
  }

  @Get()
  @Render('index.liquid')
  getHello() {
    return { message: 'Hello world!' };
  }
}
