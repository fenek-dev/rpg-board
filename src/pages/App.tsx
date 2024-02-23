import { Background } from '~/app/layout/ui/Background';
import { Toaster } from '~/shared/components/ui/sonner';
import { RenderPopups } from '~/widgets/popups/ui/RenderPopups';
import { Menu } from '~/widgets/settings/ui/Menu';

function App() {
  return (
    <main>
      <Menu />
      <RenderPopups />
      <Toaster />
      <Background />
    </main>
  );
}

export default App;
