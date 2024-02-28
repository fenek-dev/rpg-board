import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button } from '~/shared/components/ui/button';

import { CombatEntity } from '../store/combat.types';

interface EntityProps {
  entity: CombatEntity;
}

export const Entity = ({ entity }: EntityProps) => {
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);
  const style: React.CSSProperties = useMemo(
    () => ({
      height: gridSize * entity.h,
      left: 0,
      position: 'absolute',
      top: 0,
      transform: `translate(${entity.x * gridSize}px, ${entity.y * gridSize}px)`,
      width: gridSize * entity.w,
    }),
    [entity.h, entity.w, entity.x, entity.y, gridSize]
  );

  return (
    <Button style={style} variant="outline">
      {entity.icon}
    </Button>
  );
};
