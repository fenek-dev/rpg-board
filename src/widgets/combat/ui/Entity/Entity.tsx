import { useDispatch } from 'react-redux';

import { Attack } from '~/entities/extendable/attacks';
import { EntityBelongs } from '~/entities/extendable/entity';
import { Button } from '~/shared/components/ui/button';

import { castAttack } from '../../store/combat.slice';
import { CombatEntity } from '../../store/combat.types';
import { EntityBar } from './EntityBar';

interface EntityProps {
  entity: CombatEntity;
  id: string;
}

export const EntityIcon = ({ entity, id }: EntityProps) => {
  const dispatch = useDispatch();

  const isFriendly = entity.belongs === EntityBelongs.FRIENDLY;

  const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === entity.belongs) {
      const attack = JSON.parse(e.dataTransfer.getData('attack')) as Attack;
      const attack_id = e.dataTransfer.getData('attack_id');
      dispatch(castAttack({ attack: attack_id, enemy: id }));
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === entity.belongs) {
      e.dataTransfer.dropEffect = 'copy';
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Button
      className="relative text-5xl transition-transform"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onMouseDown={(e) => e.stopPropagation()}
      size="entity"
      variant={isFriendly ? 'outline' : 'destructive'}
    >
      {entity.icon}
      <EntityBar color={isFriendly ? 'bg-lime-900' : 'bg-red-900'} max={entity.stats.max_hp} value={entity.stats.hp} />
    </Button>
  );
};
