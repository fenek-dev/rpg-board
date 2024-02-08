import { useSelector } from 'react-redux';

import { DndBoard } from '~/app/providers/DndBoard';
import { RootState } from '~/app/store';
import { boardPositionStyle } from '~/shared/utils';
import { Render } from '~/widgets/blocks/ui/Render';

function App() {
  const { gridSize, height, width } = useSelector((state: RootState) => state.settings);

  return (
    <main
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      style={boardPositionStyle(gridSize, width, height)}
    >
      <DndBoard>
        <Render />
      </DndBoard>
    </main>
  );
}

export default App;
