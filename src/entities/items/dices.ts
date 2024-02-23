import { asDices } from '../extendable/dices';

export const DICES = asDices({
  d2: {
    max: 2,
    min: 1,
  },
  d4: {
    max: 4,
    min: 1,
  },
  d6: {
    max: 6,
    min: 1,
  },
  d8: {
    max: 8,
    min: 1,
  },
  d10: {
    max: 10,
    min: 1,
  },
  d12: {
    max: 12,
    min: 1,
  },
  d20: {
    max: 20,
    min: 1,
  },
  d100: {
    max: 100,
    min: 1,
  },
});
