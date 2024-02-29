import { asEntities } from '../extendable/entity';

export const ENEMIES = asEntities({
  dragon: {
    attack: 5,
    defense: 5,
    hp: 50,
    icon: '🐉',
    id: 'dragon',
    name: 'Dragon',
  },
  goblin: {
    attack: 1,
    defense: 1,
    hp: 5,
    icon: '👺',
    id: 'goblin',
    name: 'Goblin',
  },
  orc: {
    attack: 2,
    defense: 2,
    hp: 10,
    icon: '👹',
    id: 'orc',
    name: 'Orc',
  },
  troll: {
    attack: 3,
    defense: 3,
    hp: 20,
    icon: '👿',
    id: 'troll',
    name: 'Troll',
  },
});
