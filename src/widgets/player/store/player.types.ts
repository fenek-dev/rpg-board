import { PlayerState } from './player.slice';

export interface ChangePlayerStat<
  PS extends keyof PlayerState = keyof PlayerState,
> {
  name: PS;
  value: PlayerState[PS];
}
