"use client";

import Image from "next/image";
import Context from "./context/contextApi";
import Header from "./components/Header";

export default function Home() {
  return (
    <Context>
      <div className="flex flex-col h-full">
        <Header>
          <main className="flex flex-col h-full"></main>
        </Header>
      </div>
    </Context>
  );
}
