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
  RestoreEnergy: {
    description: 'Restore energy',
    icon: '🔹',
    id: 'RestoreEnergy',
    name: 'Restore energy',
  },
});
