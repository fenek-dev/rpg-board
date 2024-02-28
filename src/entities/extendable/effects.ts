export interface Effect {
  description?: string;
  icon: string;
  id: string;
  name: string;
}

export interface EffectWithData extends Effect {
  amount: number;
}

export const asEffects = <T>(et: { [K in keyof T]: Effect }) => et;
