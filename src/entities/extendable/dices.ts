export interface Dice {
  max: number;
  min: number;
}

export const asDices = <T>(et: { [K in keyof T]: Dice }) => et;
