"use client";

import React, { createContext, useState, useEffect, ProviderProps } from "react";
import { fetchDataFromApi } from "../utils/api";
import { memo } from "react";
import { Context } from "../utils/constant";
import {newContent} from "@/dummydata/homeData";
import {trendingContent} from "@/dummydata/trendingData";
import {musicContent} from "@/dummydata/musicData";
import {liveContent} from "@/dummydata/liveData";
import {filmsContent} from "@/dummydata/filmsData";


const AppContext = (props: ProviderProps<string>) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  React.useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

   async function fetchSelectedCategoryData(params: string) {
    setLoading(true);
    // await fetchDataFromApi(`search/?q=${params}`).then((contents) => {
    //   console.log({contents});
    //   setSearchResults(contents);
    //   setLoading(false);
    // });
    const getSearchVideos = (): Promise<any[]> =>  new Promise <any[]> ((res,rej)=>{
      console.log({params})
      setTimeout(() => {
        switch(params)
        {
        case 'New': return res(newContent);
        case 'Trending': return res(trendingContent);
        case 'Music': return res(musicContent);
        case 'Films': return res(filmsContent);
        case 'Live': return res(liveContent);
        default: res(newContent);
        }
        
      }, 2000);
    })
    getSearchVideos().then((res)=>{
      console.log({res});
      setSearchResults(res);
      setLoading(false);
    })
      
    }

  return (
    <Context.Provider 
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default memo(AppContext);
