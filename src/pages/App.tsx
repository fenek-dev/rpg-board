import { Toaster } from '~/shared/components/ui/sonner';
import { RenderPopups } from '~/widgets/popups/ui/RenderPopups';
import { Menu } from '~/widgets/settings/ui/Menu';

function App() {
  return (
    <main>
      <Menu />
      <RenderPopups />
      <Toaster />
    </main>
  );
}

export default App;
