import { asEffects } from '../extendable/effects';

export const EFFECTS = asEffects({
  Damage: {
    description: 'Deal damage',
    icon: '🩸',
    id: 'Damage',
    name: 'Damage',
  },
  Heal: {
    description: 'Heals your health',
    icon: '❤️‍🩹',
    id: 'Heal',
    name: 'Heal',
  },
  RestoreMana: {
    description: 'Restore mana',
    icon: '🔹',
    id: 'RestoreMana',
    name: 'Restore mana',
  },
});
