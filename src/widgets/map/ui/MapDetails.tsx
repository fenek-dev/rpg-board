import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/store';
import { TERRAIN_LOOT_SETS } from '~/entities/map/loot';
import { TERRAIN_CELLS } from '~/entities/map/terrain';
import { Badge } from '~/shared/components/ui/badge';
import { ScrollArea } from '~/shared/components/ui/scroll-area';
import { Separator } from '~/shared/components/ui/separator';
import { LootItem } from '~/widgets/blocks/ui/items/loot/LootItem';

import { getTerrainFromNoiseValue } from '../utils/map';

interface MapDetailsProps {
  gridSize: number;
}

export const MapDetails = React.memo(({ gridSize }: MapDetailsProps) => {
  const { selectedCell, terrain } = useSelector((state: RootState) => state.map);
  const cell = getTerrainFromNoiseValue(terrain[selectedCell[1]][selectedCell[0]]);

  if (!cell) return null;

  const loot = TERRAIN_LOOT_SETS[cell.id as keyof typeof TERRAIN_CELLS];
  return (
    <div className=" mr-2 flex h-full w-60 flex-col rounded-md border border-input p-2">
      <h3 className="text-2xl font-bold">{cell?.name}</h3>
      <Badge className="my-1 self-start" variant="outline">
        {cell.dangerLevel} level
      </Badge>
      <p className="text-sm text-muted-foreground">{cell.description}</p>
      <Separator />
      <h4 className="my-2 text-xl">Available loot</h4>
      <ScrollArea className="h-48 w-full border border-input">
        <div className="grid grid-cols-3 items-center justify-center gap-4 p-1">
          {loot
            .sort((a, b) => b.chance - a.chance)
            .map((l, i) => (
              <LootItem key={i} loot={l} />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
});
