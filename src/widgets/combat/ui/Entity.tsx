import { useDispatch } from 'react-redux';

import { Attack } from '~/entities/extendable/attacks';
import { Entity } from '~/entities/extendable/entity';
import { Button } from '~/shared/components/ui/button';

import { castAttackOnEnemy } from '../store/combat.slice';

interface EntityProps {
  entity: Entity;
  id: string;
}

export const EntityIcon = ({ entity, id }: EntityProps) => {
  const dispatch = useDispatch();

  const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === 'enemy') {
      const attack = JSON.parse(e.dataTransfer.getData('attack')) as Attack;
      dispatch(castAttackOnEnemy({ attack: attack.id, enemy: id }));
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === 'enemy') {
      e.dataTransfer.dropEffect = 'copy';
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Button
      className="text-3xl transition-transform"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onMouseDown={(e) => e.stopPropagation()}
      size="big"
      variant="destructive"
    >
      {entity.icon}
    </Button>
  );
};
