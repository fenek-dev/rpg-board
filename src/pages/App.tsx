import { DndBoard } from '~/app/providers/DndBoard';
import { RenderPopups } from '~/widgets/popups/ui/RenderPopups';

function App() {
  return (
    <DndBoard>
      <RenderPopups />
    </DndBoard>
  );
}

export default App;
