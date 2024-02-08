import { HpBar } from '~/widgets/player/ui/HpBar';
import { HungerBar } from '~/widgets/player/ui/HungerBar';
import { StaminaBar } from '~/widgets/player/ui/StaminaBar';
import { ThirstyBar } from '~/widgets/player/ui/ThirstyBar';

const UI_BLOCKS = {
  HpBar: HpBar,
  HungerBar: HungerBar,
  StaminaBar: StaminaBar,
  ThirstyBar: ThirstyBar,
} as const;

export type UiBlockType = typeof UI_BLOCKS;

export default UI_BLOCKS;
