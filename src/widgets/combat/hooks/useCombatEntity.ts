import { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';

import { CombatEntity } from '../store/combat.types';

export const useCombatEntity = (entity: CombatEntity, id: string) => {
  const isDragging = useRef(false);
  const gridSize = useSelector((state: RootState) => state.settings.gridSize);

  const onDragStart = (event: React.DragEvent<HTMLElement>) => {
    isDragging.current = true;
    event.currentTarget.classList.add('opacity-60');
    event.dataTransfer.setData('entity', JSON.stringify(entity));
    event.dataTransfer.setData('id', id);
    event.dataTransfer.effectAllowed = 'all';
    event.dataTransfer.setDragImage(event.currentTarget, 0, -1);
    window.entity = entity;
    window.dragId = id;
  };

  const onDragEnd = (event: React.DragEvent<HTMLElement>) => {
    isDragging.current = false;
    window.entity = undefined;
    event.currentTarget.classList.remove('opacity-60');
  };

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

  return {
    isDragging,
    onDragEnd,
    onDragStart,
    style,
  };
};
