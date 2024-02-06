"use client";
import Image from "next/image";
import { Grid } from "~/setup/layout";
import { DndBoard } from "~/setup/providers/DndBoard";

export default function Home() {
  return (
    <main className="h-screen w-screen max-w-[100vw] max-h-[100vh] overflow-hidden">
      <DndBoard></DndBoard>
    </main>
  );
}
