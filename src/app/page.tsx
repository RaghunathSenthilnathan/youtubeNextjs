"use client";

import Image from "next/image";
import Context from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Context>
        <Header />
        <Feed />
        {/* <SearchResult /> */}
      </Context>
    </main>
  );
}
