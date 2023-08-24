"use client";

import LeftNav from "@/components/LeftNav";
import SearchResultVideoCard from "@/components/SearchResultVideoCard";
import { ResultTypes } from "@/model/searchResult";
import { fetchDataFromApi } from "@/utils/api";
import { useParams } from "next/navigation";
import { useRouter } from 'next/router'
import React, { useEffect } from "react";

const SearchPanel = () => {
  const [result, setResult] = React.useState<Array<ResultTypes>>([]);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const router = useRouter()
  const  params = router?.query?.search

  useEffect(() => {
    document.getElementById("root")?.classList.remove("custom-h");
    if(params != null){
      fetchResults(params);
    }
    
  }, [params]);

  const fetchResults = async (params1: any) => {
    setLoading(true);
    await fetchDataFromApi(`search/?q=${params1}`).then((res) => {
      setResult(res?.contents);
      setLoading(false);
    });
  };

  // console.log({ router });
  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            {result?.map((item: any, index: any) => {
              if (item?.type !== "video") return false;
              return (
                <SearchResultVideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
