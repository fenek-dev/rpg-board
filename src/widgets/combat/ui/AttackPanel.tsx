import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Attack } from '~/entities/extendable/attacks';
import { Button } from '~/shared/components/ui/button';

export const AttackPanel = () => {
  const attacks = useSelector((state: RootState) => state.combat.attacks);

  const onDragStart = (attack: Attack) => (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.add('opacity-60');
    event.dataTransfer.setData('attack', JSON.stringify(attack));
    event.dataTransfer.effectAllowed = 'all';
    window.attack = attack;
    event.dataTransfer.setDragImage(event.currentTarget, 0, -1);
  };

  const onDragEnd = (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.remove('opacity-60');
  };

  return (
    <div className="mb-2 mt-4 flex flex-wrap gap-2">
      {Object.values(attacks).map((a) => (
        <Button
          draggable={true}
          key={a.name}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart(a)}
          onMouseDown={(e) => e.stopPropagation()}
          size="slot"
          variant="outline"
        >
          {a.icon}
        </Button>
      ))}
    </div>
  );
};
