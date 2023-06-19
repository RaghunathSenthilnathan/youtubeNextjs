"use client";

import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import { memo } from "react";
import { Context } from "../utils/constant";

const AppContext = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    (async () => {
      await fetchSelectedCategoryData(selectCategories);
    })();
  }, [selectCategories]);

  async function fetchSelectedCategoryData(params: any) {
    setLoading(true);
    await fetchDataFromApi(`search/?q=${params}`).then((res) => {
      console.log({ res });
      // setSelectCategories(res);
      setLoading(false);
    });
  }

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default memo(AppContext);
