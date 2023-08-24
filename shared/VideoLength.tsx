import React from "react";
import moment from "moment";
const VideoLength : React.FC<{time : number}> = ({ time }) => {
  let videoLengthInSeconds = moment()?.startOf("day")?.seconds(time) ?.format("H:mm:ss");
    // console.log(parseInt(videoLengthInSeconds.slice(0,1)) > 0)
    if(parseInt(videoLengthInSeconds.slice(0,1)) < 1){
      videoLengthInSeconds = videoLengthInSeconds.slice(2,7)
    }
  return (
    <div>
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
