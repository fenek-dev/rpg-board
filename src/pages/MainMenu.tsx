import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Background } from '~/app/layout/ui/Background';
import { Badge } from '~/shared/components/ui/badge';
import { Button } from '~/shared/components/ui/button';
import { ScrollArea } from '~/shared/components/ui/scroll-area';
import { Separator } from '~/shared/components/ui/separator';

export const MainMenu = () => {
  return (
    <>
      <main className="fixed left-1/2 top-1/2 flex h-96 -translate-x-1/2 -translate-y-1/2 gap-2 rounded-md border border-input bg-background p-4">
        <div className="flex w-48 flex-col gap-2">
          <Button variant="outline">Load game</Button>
          <Button variant="outline">New game</Button>
          <Button variant="outline">Settings</Button>
          <Button variant="outline">About</Button>
          <Badge className="mt-auto self-center" variant="outline">
            0.0.1v
          </Badge>
        </div>
        <Separator orientation="vertical" />
        <div className="ml-2 flex w-64 flex-col">
          <h1 className="text-center text-2xl font-bold">RPG Board</h1>
          <h3 className="mb-1 mt-2 text-lg text-muted-foreground">Changelog</h3>
          <ScrollArea className="mt-2 h-48">
            <div>
              <h4 className="">0.0.1v</h4>
              <p className="text-sm text-muted-foreground">Game still in development</p>
            </div>
          </ScrollArea>
          <div className="mt-auto">
            <Separator />
            <div className="mt-2 flex">
              <Button size="icon" title="Github" variant="ghost">
                <a href="https://github.com/fenek-dev/rpg-board" rel="noopener noreferrer" target="_blank">
                  <GitHubLogoIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Background />
    </>
  );
};

export default MainMenu;
