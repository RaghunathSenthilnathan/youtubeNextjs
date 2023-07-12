"use client";

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
// NEXT_PUBLIC_REACT_YOUTUBE_CLONE_SECRET_KEY = 'c8448a3303mshf544819239dbd98p1ab615jsn984c2b52f3c4'
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_REACT_YOUTUBE_CLONE_SECRET_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
