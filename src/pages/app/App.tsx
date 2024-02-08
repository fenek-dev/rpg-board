import { boardPositionStyle } from '~/shared/utils';

import { DndBoard } from '../../app/providers/DndBoard';
import { Elements } from './elements';

const gridSize = 30;
const width = 48;
const height = 28;

function App() {
  return (
    <main
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      style={boardPositionStyle(gridSize, width, height)}
    >
      <DndBoard>
        <Elements />
      </DndBoard>
    </main>
  );
}

export default App;
