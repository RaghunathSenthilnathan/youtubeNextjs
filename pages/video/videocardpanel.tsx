"use client";

import SuggestionVideosCard from "@/components/SuggestionVideosCard";
import { fetchDataFromApi } from "@/utils/api";
import { abbreviateNumber } from "js-abbreviation-number";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { Loader } from "../../shared/Loader";
import Image from "next/image";
import React from "react";

interface AuthorTypes {
  author: { url: string}[];
  title: string;
  badges: { url: string; type: string }[];
  views: number ;
  likes: number ;
  avatar : { url: string}[];
  stats : {subscribersText: string}

};

interface VideoDetailsTypes {
  videoId?: string;
  lengthSeconds?: string;
  thumbnails?: { url: string }[];
  title?: string;
  descriptionSnippet?: string;
  author?: AuthorTypes;
  stats?: AuthorTypes;
  publishedTimeText?: string;
};


interface RelatedVideosTypes  {
  contents : {type :string ; video : VideoDetailsTypes}[];
}



const VideoCardPanel = () => {
  const [loading, setLoading] = React.useState(false);
  const [video, setVideo] = React.useState<VideoDetailsTypes>();
  const [relatedVideos, setRelatedVideos] = React.useState<RelatedVideosTypes>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const fetchVideoDetails = React.useCallback(async () => {
    setLoading(true);
    await fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log({ res });
      setVideo(res);
      setLoading(false);
    });
  }, [id]);

  const fetchRelatedVideos = useCallback(async () => {
    setLoading(true);
    await fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log({ res });
      setRelatedVideos(res);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    document.getElementById("root")?.classList.add("custom-h");
    fetchVideoDetails()
      // make sure to catch any error
      .catch(console.error);
    fetchRelatedVideos()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchRelatedVideos, fetchVideoDetails, id]);

  console.log({ id, video });

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      {loading && <Loader />}
      <div className="w-full max-w-[1280px]  flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc100%-400px] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className=" flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className=" flex h-11 w-11 rounded-full overflow-hidden">
                  <Image
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url as string}
                    height={100}
                    width={100}
                    alt="Avatar Image"
                  />
                </div>
              </div>
              <div className=" flex flex-col ml-3">
                <div className=" text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>
                <div className=" text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className=" flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className=" text-xl text-white mr-2" />
                <span>
                  {`${abbreviateNumber(video?.stats?.likes as number, 2)} Likes`}
                </span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className=" text-xl text-white mr-2" />
                <span>
                  {`${abbreviateNumber(video?.stats?.views as number, 2)} Views`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col py-6 px-4 overflow-y-auto lg: w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            else
              return <SuggestionVideosCard key={item?.video?.videoId}  video = {item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoCardPanel;
