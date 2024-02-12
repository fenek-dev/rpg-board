import { useSelector } from 'react-redux';

import { DndBoard } from '~/app/providers/DndBoard';
import { RootState } from '~/app/store';
import { boardPositionStyle } from '~/shared/utils';
import { Render } from '~/widgets/blocks/ui/Render';
import { RenderPopups } from '~/widgets/popups/ui/RenderPopups';

function App() {
  const { gridSize, height, width } = useSelector((state: RootState) => state.settings);
  const blocks = useSelector((state: RootState) => state.blocks.blocks);

  return (
    <>
      <main
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={boardPositionStyle(gridSize, width, height)}
      >
        <DndBoard>
          <Render blocks={blocks} gridSize={gridSize} />
          <RenderPopups />
        </DndBoard>
      </main>
    </>
  );
}

export default App;
