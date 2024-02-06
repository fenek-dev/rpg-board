import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { UI_BLOCKS } from "~/setup/enum/blocks";
import { RootState } from "~/setup/store";

export const Elements = React.memo(() => {
  const blocks = useSelector((state: RootState) => state.blocks.blocks);
  return (
    <div>
      {_.entries(blocks).map(([id, { children, ...block }]) => {
        const Element = UI_BLOCKS[block.name];
        return <Element key={id} gridSize={30} id={id} {...block} />;
      })}
    </div>
  );
});

Elements.displayName = "Elements";
