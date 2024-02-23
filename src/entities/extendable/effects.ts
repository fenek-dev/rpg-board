import { Dice } from './dices';

export interface Effect {
  description: string;
  icon: string;
  id: string;
  name: string;
}

export interface EffectWithData extends Effect {
  dices: Dice[];
}

export const asEffects = <T>(et: { [K in keyof T]: Effect }) => et;
