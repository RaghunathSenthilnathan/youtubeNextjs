"use client";
import React,{ Suspense,useEffect,useState} from "react";
import Header from "../components/Header";
import Context from "../context/contextApi";
import { Loading } from "../shared/Loader";
import SearchResult from "@/components/SearchResult";
import dynamic from 'next/dynamic'

export default function Home() {
  const Feed = dynamic(() => import("../components/Feed"), { ssr: false });
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (<>
  { isClient && (<main className="flex flex-col h-full">
      <Context>
        <Header />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
        <SearchResult />
      </Context>
    </main>)}
  </>
    
  );
}
