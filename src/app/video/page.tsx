"use client";

import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Context } from '@/utils/constant';
import { fetchDataFromApi } from '@/utils/api';
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';
import SuggestionVideos from '@/components/SuggestionVideosCard';
import SuggestionVideosCard from '@/components/SuggestionVideosCard';

const VideoPanel = () => {

  const [video, setVideo] = useState()
  const [relatedVideos, setRelatedVideos] = useState()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  // const { setLoading } = useContext(Context);
  const fetchVideoDetails =
    useCallback(
      async () => {
        // setLoading(true);
        await fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
          console.log({ res })
          setVideo(res)
          // setLoading(false)
        })
      },

      [id]
    )

  const fetchRelatedVideos = useCallback(async () => {
    // setLoading(true);
    await fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log({ res })
      setRelatedVideos(res)
      // setLoading(false)
    })
  },[id])

  useEffect(() => {
    document.getElementById("root")?.classList.add("custom-h");
    fetchVideoDetails()
      // make sure to catch any error
      .catch(console.error);
    fetchRelatedVideos()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchRelatedVideos, fetchVideoDetails, id])

 console.log({id,video})
 
  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black'>
      <div className='w-full max-w-[1280px]  flex flex-col justify-center lg:flex-row'>
        <div className='flex flex-col lg:w-[calc100%-350px] xl:w-[calc100%-400px] px-4 py-3 lg:py-6 overflow-y-auto'>
          <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>
          <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {video?.title}
          </div>
          <div className=' flex justify-between flex-col md:flex-row mt-4'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className=' flex h-11 w-11 rounded-full overflow-hidden'>
                  <img className="h-full w-full object-cover " src={video?.author?.avatar[0]?.url} />

                </div>
              </div>
              <div className=' flex flex-col ml-3'>
                <div className=' text-white text-md font-semibold flex items-center'>
                  {video?.author?.title}
                  {
                    video?.author?.badges[0]?.type === "VERIFIED CHANNEL" && (
                      <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                    )}
                </div>
                <div className=' text-white/[0.7] text-sm'>
                  {video?.author?.state?.subscribersText}
                </div>
              </div>
             
            </div>
            <div className=' flex text-white mt-4 md:mt-0'>
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                  <AiOutlineLike className=' text-xl text-white mr-2' />
                  <span >
                    {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                  </span>
                </div>
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                  <AiOutlineLike className=' text-xl text-white mr-2' />
                  <span >
                    {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                  </span>
                </div>
              </div>
          </div>
        </div>
        <div className=" flex flex-col py-6 px-4 overflow-y-auto lg: w-[350px] xl:w-[400px]">
    {relatedVideos?.contents?.map((item,index)=>{
      if(item?.type !== "video") return false
      else  return ( <SuggestionVideosCard key={index} video={item?.video}/>)
      
    })}
  </div>
      </div>
     </div>
  )
}

export default VideoPanel;