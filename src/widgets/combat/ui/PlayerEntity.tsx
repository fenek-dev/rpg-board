import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Attack } from '~/entities/extendable/attacks';
import { Button } from '~/shared/components/ui/button';

import { castAttackOnSelf } from '../store/combat.slice';

export const PlayerEntity = () => {
  const dispatch = useDispatch();

  const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === 'self') {
      const attack = JSON.parse(e.dataTransfer.getData('attack')) as Attack;
      const id = e.dataTransfer.getData('attack_id');
      dispatch(castAttackOnSelf(id));
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    if (window.attack?.target === 'self') {
      e.dataTransfer.dropEffect = 'copy';
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Button
      className="text-5xl transition-transform"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onMouseDown={(e) => e.stopPropagation()}
      size="entity"
      variant="outline"
    >
      👤
    </Button>
  );
};
