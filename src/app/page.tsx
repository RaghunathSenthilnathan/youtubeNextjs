"use client";

import { Suspense } from "react";
import Image from "next/image";
import Context from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import { Loading } from "./shared/Loader";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Context>
        <Header />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
        {/* <SearchResult /> */}
      </Context>
    </main>
  );
}
