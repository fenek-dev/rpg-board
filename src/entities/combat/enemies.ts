import { asEntities } from '../extendable/entity';

export const ENEMIES = asEntities({
  dragon: {
    attack: 5,
    defense: 5,
    h: 3,
    hp: 50,
    icon: '🐉',
    id: 'dragon',
    name: 'Dragon',
    w: 3,
  },
  goblin: {
    attack: 1,
    defense: 1,
    h: 1,
    hp: 5,
    icon: '👺',
    id: 'goblin',
    name: 'Goblin',
    w: 1,
  },
  orc: {
    attack: 2,
    defense: 2,
    h: 1,
    hp: 10,
    icon: '👹',
    id: 'orc',
    name: 'Orc',
    w: 1,
  },
  troll: {
    attack: 3,
    defense: 3,
    h: 2,
    hp: 20,
    icon: '👿',
    id: 'troll',
    name: 'Troll',
    w: 2,
  },
});
