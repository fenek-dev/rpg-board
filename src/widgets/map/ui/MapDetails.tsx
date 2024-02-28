import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import BASIC_POPUPS from '~/entities/constant/popup';
import { Badge } from '~/shared/components/ui/badge';
import { Button } from '~/shared/components/ui/button';
import { Separator } from '~/shared/components/ui/separator';
import { startCombat } from '~/widgets/combat/store/combat.slice';
import { addPopup } from '~/widgets/popups/store/popups.slice';

import { travelTo } from '../store/map.slice';

export const MapDetails = React.memo(() => {
  const dispatch = useDispatch();
  const { currentPosition, graph, selectedCell } = useSelector((state: RootState) => state.map);
  const inCombat = useSelector((state: RootState) => state.combat.started);
  const cell = graph[selectedCell[0]][selectedCell[1]];

  const isTheSameCell = selectedCell[0] === currentPosition[0] && selectedCell[1] === currentPosition[1];

  const onTravel = () => {
    dispatch(
      travelTo({
        x: selectedCell[0],
        y: selectedCell[1],
      })
    );
  };

  const onCombat = () => {
    dispatch(
      addPopup({
        ...BASIC_POPUPS.Combat,
        isCollapsed: false,
        x: window.innerWidth / 4,
        y: window.innerHeight / 4,
      })
    );
    dispatch(startCombat());
  };

  if (!cell) return null;

  return (
    <div className="flex h-full w-60 flex-col rounded-md">
      <h3 className="text-2xl font-bold">{cell?.name}</h3>
      <Badge className="my-1 self-start" variant="outline">
        {cell.dangerLevel} level
      </Badge>
      <p className="text-sm text-muted-foreground">{cell.description}</p>
      <Separator />
      <div className="mt-auto flex gap-2">
        <Button className="w-full" disabled={inCombat} onClick={onCombat} variant="outline">
          Combat
        </Button>
        <Button className="w-full" disabled={isTheSameCell || inCombat} onClick={onTravel} variant="outline">
          Travel
        </Button>
      </div>
    </div>
  );
});
