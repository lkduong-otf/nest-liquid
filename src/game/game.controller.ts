import { Controller, Get, Render } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
  private gameService = new GameService();
  constructor() {}

  @Get()
  @Render('game/index.liquid')
  async getLiquid() {
    return await this.gameService.get();
  }
}
