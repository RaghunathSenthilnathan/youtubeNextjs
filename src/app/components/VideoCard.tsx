import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { NextLink } from "./NextLink";

const VideoCard = ({ video }) => {
  return (
    <>
      <NextLink href={`/video/${video.videoId}`}>
        <div className="relative h-48 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover "
            src={video?.thumbnails[0]?.url}
          />
          {video?.length}
        </div>
      </NextLink>
    </>
  );
};

export default VideoCard;
