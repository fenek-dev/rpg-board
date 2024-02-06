"use client";
import { DndBoard } from "~/setup/providers/DndBoard";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "~/setup/store";
import _ from "lodash";
import { UI_BLOCKS } from "~/setup/enum/blocks";
import { Elements } from "./_elements";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="h-screen w-screen max-w-[100vw] max-h-[100vh] min-w-[100vw] min-h-[100vh] overflow-hidden">
        <DndBoard>
          <Elements />
        </DndBoard>
      </main>
    </Provider>
  );
}
