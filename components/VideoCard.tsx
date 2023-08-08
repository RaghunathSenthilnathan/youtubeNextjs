"use client";

import React,{useCallback}from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { NextLink } from "./NextLink";
import VideoLength from "../shared/VideoLength";
import Image from "next/image";

const VideoCard = ({ video }) => {

  return (
    <>
      <NextLink href={`/video?id=${video.videoId}`}>
        <div  className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          
          <Image
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt="videothumb"
            height={100}
            width ={100}
          />
         <div className="absolute bottom-0 right-0 bg-black px-1 text-white
     text-xs rounded">
        {video?.lengthSeconds && (<VideoLength time= {video?.lengthSeconds}/>)}
        </div>
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img className="h-full w=full object-cover"
              src={video?.author?.avatar[0]?.url}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className=" text-[12px] font-semibold mt-3 text-white/[0.7] flex items-center">
              {video?.author?.title}
              {
                video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1"/>
                )
              }
            </span>
            <div className=" flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>
                {`${abbreviateNumber(video?.stats?.views,2)} views`}
              </span>
            <span className=" flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">

            </span>
            <span className="truncate">
              {video?.publishedTimeText}
            </span>
            </div>
          </div>
        </div>
        </div>
      </NextLink>
    </>
  );
};

export default VideoCard;