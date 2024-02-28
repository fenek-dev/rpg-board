import { Button } from '~/shared/components/ui/button';

import { useCombatEntity } from '../hooks/useCombatEntity';
import { CombatEntity } from '../store/combat.types';

interface EntityProps {
  disabled?: boolean;
  entity: CombatEntity;
}

export const Entity = ({ disabled, entity }: EntityProps) => {
  const { onDragEnd, onDragStart, style } = useCombatEntity(entity, entity.id);

  return (
    <Button
      draggable={!disabled}
      onDragEnd={disabled ? undefined : onDragEnd}
      onDragStart={disabled ? undefined : onDragStart}
      onMouseDown={(e) => e.stopPropagation()}
      style={style}
      variant="outline"
    >
      {entity.icon}
    </Button>
  );
};
