import { Attack } from '~/entities/extendable/attacks';
import { Entity } from '~/entities/extendable/entity';

interface Options {
  disable_crit: boolean;
}

export const calculateDamage = (attack: Attack, enemy: Entity, attacker: Entity, options?: Options) => {
  const charLevel = 1;
  const enemyLevel = 1;

  // Base damage
  let baseDamage = 0;
  if (attack.base === 'attack') baseDamage = attacker.stats.attack * attack.damage_multiplier;
  else if (attack.base === 'defense') baseDamage = attacker.stats.defense * attack.damage_multiplier;
  else if (attack.base === 'hp') baseDamage = attacker.stats.max_hp * attack.damage_multiplier;

  // resistance
  const resistance = enemy.stats.resistances[attack.type];
  let enemyResMultiplier = 0;

  if (resistance < 0) enemyResMultiplier = 1 - resistance / 2;
  else if (resistance >= 0 && resistance < 0.75) enemyResMultiplier = 1 - resistance;
  else if (resistance >= 0.75) enemyResMultiplier = 1 / (4 * resistance + 1);

  // Reactions
  const reaction = 1;

  // Crit
  // TODO: Replace random by prng
  const isCrit = Math.random() < attacker.stats.crit_chance / 100;
  let crit = 1;

  if (isCrit && !options?.disable_crit) crit = 1 + attacker.stats.crit_dmg / 100;

  // Defense
  const defenseMultiplier = (charLevel + 100) / (enemyLevel + 100 + charLevel + 100);

  const damage = baseDamage * crit * defenseMultiplier * enemyResMultiplier * reaction;

  return Math.ceil(damage);
};
