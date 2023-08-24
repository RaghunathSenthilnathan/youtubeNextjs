import { SearchResultTypes } from "@/model/searchResult";
import VideoLength from "@/shared/VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { NextLink } from "./NextLink";

const SuggestionVideosCard: React.FC<SearchResultTypes> = ({ key, video }) => {
  return (
    <>
      <NextLink href={`/video?id=${video.videoId}`}>
        <div className="flex  mb-3">
          <div className="relative h-24 md:h-20 xl:h-24 w-40 min-w-[160px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800  overflow-hidden">
            <div
              className="absolute bottom-0 right-0 bg-black px-1 text-white
     text-xs rounded"
            >
              {video?.lengthSeconds && (
                <VideoLength time={video?.lengthSeconds} />
              )}
            </div>
            <Image
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
              alt="videothumbnail"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm  font-bold line-clamp-2 text-white">
              {video?.title}
            </span>
            <span className=" text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
              )}
            </span>
            <div className=" flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className=" flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1"></span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </NextLink>
    </>
  );
};

export default SuggestionVideosCard;
