import React from 'react';

import { Menu } from './Menu';

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 flex justify-between border-b border-input bg-background p-2">
      <div></div>
      <div>
        <Menu />
      </div>
    </div>
  );
};
