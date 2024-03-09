import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Button } from '~/shared/components/ui/button';
import { cn } from '~/shared/utils';

interface MapCellProps {
  disabled: boolean;
  icon: string;
  isCurrentPosition: boolean;
  isSelected: boolean;
  next?: string;
  onClick?: (x: number, y: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (x: number, y: number) => void;
  subicon?: string;
  x: number;
  y: number;
}

export const MapCell = React.memo(
  ({ disabled, icon, isCurrentPosition, isSelected, next, onClick, onDoubleClick, subicon, x, y }: MapCellProps) => {
    const inCombat = useSelector((state: RootState) => state.combat.started);
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(x, y, e);
      },
      [onClick, x, y]
    );
    const handleDoubleClick = useCallback(() => {
      if (onDoubleClick && !isCurrentPosition) onDoubleClick(x, y);
    }, [onDoubleClick, x, y, isCurrentPosition]);
    return (
      <Button
        className={cn('relative text-2xl', {
          'border-primary': isSelected,
          ping: !isCurrentPosition && !disabled,
        })}
        data-grid={next}
        disabled={disabled || inCombat}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        role="gridcell"
        size="slot"
        style={{
          transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
        }}
        variant="outline"
      >
        {subicon && <span className="absolute right-1 top-1 text-xs leading-none">{subicon}</span>}
        {icon}
      </Button>
    );
  }
);
