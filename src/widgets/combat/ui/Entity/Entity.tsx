import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Attack } from '~/entities/extendable/attacks';
import { EntityBelongs } from '~/entities/extendable/entity';
import { Button } from '~/shared/components/ui/button';
import { calculateDamage } from '~/shared/utils/damage';

import { selectCurrentEntity } from '../../store/combat.selectors';
import { castAttack } from '../../store/combat.slice';
import { CombatEntity } from '../../store/combat.types';
import { EntityBar } from './EntityBar';
import { EntityIntent } from './EntityIntent';

interface EntityProps {
  entity: CombatEntity;
  id: string;
}

export const EntityIcon = ({ entity, id }: EntityProps) => {
  const dispatch = useDispatch();
  const { entity: attacker } = useSelector(selectCurrentEntity);
  const [dmg, setDmg] = useState<number | undefined>();

  const isFriendly = entity.belongs === EntityBelongs.FRIENDLY;

  const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === entity.belongs) {
      // const attack = JSON.parse(e.dataTransfer.getData('attack')) as Attack;
      const attack_id = e.dataTransfer.getData('attack_id');
      dispatch(castAttack({ attack: attack_id, enemy: id }));
      onDragLeave();
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === entity.belongs) {
      e.dataTransfer.dropEffect = 'copy';
      e.preventDefault();
      e.stopPropagation();
      const attack = window.attack;
      if (!dmg) {
        setDmg(calculateDamage(attack, entity, attacker, { disable_crit: true }));
      }
    }
  };

  const onDragLeave = () => {
    setDmg(undefined);
  };

  return (
    <div className="relative flex flex-col">
      <EntityIntent entity={entity} />
      <Button
        className="relative text-5xl transition-transform"
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onMouseDown={(e) => e.stopPropagation()}
        size="entity"
        variant={isFriendly ? 'outline' : 'destructive'}
      >
        {entity.icon}
      </Button>
      <EntityBar
        color={isFriendly ? 'bg-lime-900' : 'bg-red-900'}
        dmg={dmg}
        max={entity.stats.max_hp}
        value={entity.stats.hp}
      />
    </div>
  );
};
