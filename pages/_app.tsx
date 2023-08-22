import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import "../globals.css";
import Context from "../context/contextApi";
export default function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);
  return (
    <>
      {isClient && (
        <Context value={""}>
          <Component {...pageProps} />
        </Context>
      )}
    </>
  );
}
