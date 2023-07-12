import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { NextLink } from "./NextLink";
import VideoLength from "@/shared/VideoLength";



const SuggestionVideosCard = ({video}) => {
  return ( <><NextLink href={`/video?id=${video.videoId}`}>
  <div  className="flex  mb-3">
  <div className="relative h-24 md:h-20 xl:h-24 w-40 min-w-[160px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px rounded-xl bg-slate-800]  overflow-hidden">
    <img
      className="h-full w-full object-cover"
      src={video?.thumbnails[0]?.url}
    />
    {video?.lengthSeconds && (<VideoLength time= {video?.lengthSeconds}/>)}
  </div>
  <div className="flex flex-col ml-3 overflow-hidden">
      <span className="text-sm font-bold line-clamp-2">
        {video?.title}
      </span>
      <span className=" text-[12px] font-semibold mt-3 text-white/[0.7] flex items-center">
        {video?.author?.title}
        {
          video?.author?.badges[0]?.type === "VERIFIED CHANNEL" && (
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
</NextLink></>);
};

export default SuggestionVideosCard;
