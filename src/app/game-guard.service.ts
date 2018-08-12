import { Injectable }     from '@angular/core';
import { CanDeactivate }    from '@angular/router';
import {GameInstance} from './game.instance';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}
@Injectable()
export class GameGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private game: GameInstance) {}

  canDeactivate(): boolean {
    // if (this.game.gameInstance)
    //   this.game.gameInstance.remove();
    return true;
  }
}
