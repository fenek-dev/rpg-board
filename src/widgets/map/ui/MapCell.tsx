import { AccessibilityIcon } from '@radix-ui/react-icons';
import React, { useCallback } from 'react';

import { Button } from '~/shared/components/ui/button';
import { cn } from '~/shared/utils';

interface MapCellProps {
  disabled: boolean;
  icon: string;
  isCurrentPosition: boolean;
  isSelected: boolean;
  onClick?: (x: number, y: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (x: number, y: number) => void;
  subicon?: string;
  x: number;
  y: number;
}

export const MapCell = React.memo(
  ({ disabled, icon, isCurrentPosition, isSelected, onClick, onDoubleClick, subicon, x, y }: MapCellProps) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(x, y, e);
      },
      [onClick, x, y]
    );
    const handleDoubleClick = useCallback(() => {
      if (onDoubleClick) onDoubleClick(x, y);
    }, [onDoubleClick, x, y]);
    return (
      <Button
        className={cn('relative', {
          'border-primary': isSelected,
        })}
        disabled={disabled}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        size="slot"
        variant="outline"
      >
        {subicon && <span className="absolute right-1 top-1 text-xs leading-none">{subicon}</span>}
        {isCurrentPosition && <AccessibilityIcon className="absolute left-1 top-1 size-4 text-green-700 opacity-75" />}
        {icon}
      </Button>
    );
  }
);
