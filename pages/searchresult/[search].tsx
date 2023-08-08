"use client";

import React,{useState,useEffect,useContext} from "react";
import { useParams } from 'next/navigation';
import { fetchDataFromApi } from "@/utils/api";
import LeftNav from "@/components/LeftNav";
import SearchResultVideoCard from '@/components/SearchResultVideoCard'
const SearchPanel = () => {
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const params = useParams();
  
  useEffect(() => {
    document.getElementById('root')?.classList.remove('custom-h');
   (async()=>{
   await fetchResults()
   })()
  }, [])

  const fetchResults = () =>{
    setLoading(true);
    fetchDataFromApi(`search/?q=${params}`).then((res) => {
        console.log({res});
        setResult(res?.contents);
        setLoading(false);
    });
  }
  
  console.log({params})
  return (<>
  <div className="flex flex-row h-[calc(100%-56px)]">
    <LeftNav/>
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
  
  </div>
  </>);
};

export default SearchPanel;
