import { HpBar } from '~/widgets/player/HpBar';
import { HungerBar } from '~/widgets/player/HungerBar';
import { StaminaBar } from '~/widgets/player/StaminaBar';
import { ThirstyBar } from '~/widgets/player/ThirstryBar';

export const UI_BLOCKS = {
  HpBar: HpBar,
  HungerBar: HungerBar,
  StaminaBar: StaminaBar,
  ThirstyBar: ThirstyBar,
} as const;
