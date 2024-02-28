import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { Badge } from '~/shared/components/ui/badge';
import { Button } from '~/shared/components/ui/button';
import { Separator } from '~/shared/components/ui/separator';

import { travelTo } from '../store/map.slice';

export const MapDetails = React.memo(() => {
  const dispatch = useDispatch();
  const { currentPosition, graph, selectedCell } = useSelector((state: RootState) => state.map);
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

  if (!cell) return null;

  return (
    <div className="flex h-full w-60 flex-col rounded-md">
      <h3 className="text-2xl font-bold">{cell?.name}</h3>
      <Badge className="my-1 self-start" variant="outline">
        {cell.dangerLevel} level
      </Badge>
      <p className="text-sm text-muted-foreground">{cell.description}</p>
      <Separator />
      <Button className="mt-auto" disabled={isTheSameCell} onClick={onTravel} variant="outline">
        Travel
      </Button>
    </div>
  );
});
