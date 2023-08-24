import React, { useEffect } from "react";
import { Context } from "../utils/constant";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const fetchResults = React.useContext(Context);

  useEffect(() => {
    document.getElementById("root")?.classList.remove("custom-h");
  }, []);

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!fetchResults?.loading &&
              fetchResults?.searchResults?.contents?.length > 0 &&
              fetchResults?.searchResults?.contents?.map(
                (item: any, index: any) => {
                  if (item?.type != "video") return false;
                  return (
                    <>
                      <VideoCard
                        key={item?.video?.videoId}
                        video={item?.video}
                      />
                    </>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
