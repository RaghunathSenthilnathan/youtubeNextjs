import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Context from "../context/contextApi";
import "../globals.css";
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
