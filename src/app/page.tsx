"use client";
import { DndBoard } from "~/setup/providers/DndBoard";
import { Provider } from "react-redux";
import { store } from "~/setup/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="h-screen w-screen max-w-[100vw] max-h-[100vh] min-w-[100vw] min-h-[100vh] overflow-hidden">
        <DndBoard></DndBoard>
      </main>
    </Provider>
  );
}
