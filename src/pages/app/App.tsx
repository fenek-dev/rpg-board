import { DndBoard } from "../../app/providers/DndBoard";
import { Elements } from "./elements";

function App() {
  return (
    <main className="h-screen w-screen max-w-[100vw] max-h-[100vh] min-w-[100vw] min-h-[100vh] overflow-hidden">
      <DndBoard>
        <Elements />
      </DndBoard>
    </main>
  );
}

export default App;
