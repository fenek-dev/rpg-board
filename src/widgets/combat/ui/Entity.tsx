import { Button } from '~/shared/components/ui/button';

import { useCombatEntity } from '../hooks/useCombatEntity';
import { CombatEntity } from '../store/combat.types';

interface EntityProps {
  entity: CombatEntity;
}

export const Entity = ({ entity }: EntityProps) => {
  const { onDragEnd, onDragStart, style } = useCombatEntity(entity, entity.id);

  return (
    <Button
      draggable={true}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onMouseDown={(e) => e.stopPropagation()}
      style={style}
      variant="outline"
    >
      {entity.icon}
    </Button>
  );
};
