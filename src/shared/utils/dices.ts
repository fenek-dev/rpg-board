import { Dice } from '~/entities/extendable/dices';

export const getMinMaxFromDices = (dices: Dice[]) =>
  dices.reduce((prev, d) => [prev[0] + d.min, prev[1] + d.max], [0, 0]);
