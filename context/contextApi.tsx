"use client";

import React, {
  ProviderProps,
  memo
} from "react";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../utils/constant";

const AppContext = (props: ProviderProps<string>) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchResults, setSearchResults] = React.useState<any>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("New");
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  async function fetchSelectedCategoryData(params: string) {
    setLoading(true);
    await fetchDataFromApi(`search/?q=${params}`).then((contents) => {
      console.log({contents});
      setSearchResults(contents);
      setLoading(false);
    });
    // const getSearchVideos = (): Promise<any[]> =>
    //   new Promise<any[]>((res, rej) => {
    //     console.log({ params });
    //     setTimeout(() => {
    //       switch (params) {
    //         case "New":
    //           return res(newContent);
    //         case "Trending":
    //           return res(trendingContent);
    //         case "Music":
    //           return res(musicContent);
    //         case "Films":
    //           return res(filmsContent);
    //         case "Live":
    //           return res(liveContent);
    //         default:
    //           res(newContent);
    //       }
    //     }, 2000);
    //   });
    // getSearchVideos().then((res) => {
    //   console.log({ res });
    //   setSearchResults(res);
    //   setLoading(false);
    // });
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
