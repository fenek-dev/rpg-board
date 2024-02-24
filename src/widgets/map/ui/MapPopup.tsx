import { AccessibilityIcon } from '@radix-ui/react-icons';
import { random } from 'lodash-es';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Badge } from '~/shared/components/ui/badge';
import { Button } from '~/shared/components/ui/button';
import { ScrollArea } from '~/shared/components/ui/scroll-area';
import { cn } from '~/shared/utils';
import { addPopup } from '~/widgets/popups/store/popups.slice';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { generateTerrain, selectCell } from '../store/map.slice';

export const MapPopup = React.memo(() => {
  const dispatch = useDispatch();
  const { currentPosition, graph, seed, selectedCell } = useSelector((state: RootState) => state.map);

  const updateMap = () => {
    dispatch(generateTerrain(random(0, 100000)));
  };

  const onCellClick = (x: number, y: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(selectCell({ x, y }));
    dispatch(
      addPopup({
        ...BASIC_POPUPS.MapDetail,
        isCollapsed: false,
        x: e.clientX + 50,
        y: e.clientY,
      })
    );
  };

  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Map.container_id}>
      <Badge onClick={updateMap} variant="outline">
        Seed: {seed}
      </Badge>
      <ScrollArea className="my-4 h-96">
        <div className="flex flex-col gap-4 py-2">
          {graph.map((row, i) => {
            const disabled = Math.abs(i - currentPosition[0]) > 1;
            return (
              <div className="flex justify-around gap-2" key={i}>
                {row.map((cell, j) => (
                  <Button
                    className={cn('relative', {
                      'ping border-primary': selectedCell[0] === i && selectedCell[1] === j,
                    })}
                    disabled={disabled}
                    key={j}
                    onClick={onCellClick(i, j)}
                    size="slot"
                    variant="outline"
                  >
                    {currentPosition[0] === i && currentPosition[1] === j && (
                      <AccessibilityIcon className="absolute left-1 top-1 size-4 text-green-700 opacity-75" />
                    )}
                    {cell.icon}
                  </Button>
                ))}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </SimpleDraggablePopup>
  );
});
