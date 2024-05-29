import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  get() {
    return new Promise(res => {
      setTimeout(() => {
        res({
          message: 'Game List',
          games: [
            { id: 1, name: 'first', des: 'The first game', year: 1998 },
            { id: 1, name: 'second', des: 'The second game', year: 2005 }
          ]
        });
      }, 1500);
    });
  }
}
