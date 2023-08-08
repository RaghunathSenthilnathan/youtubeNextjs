"use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import { Loading } from "../shared/Loader";
import dynamic from "next/dynamic";

export default function Home() {
  const Feed = dynamic(() => import("../components/Feed"), { ssr: false });

  return (
    <>
      <main className="flex flex-col h-full">
         <Header/>
       <Suspense fallback={<Loading />}>
          <Feed/>
         </Suspense>
      </main>
    </>
  );
}
