"use client";

import { useSearchParams } from 'next/navigation'
import React from 'react'

const VideoPanel = () => {
const searchParams = useSearchParams()
searchParams.get('id')
console.log(searchParams.get('id'))
  return (
    <div>Check</div>
  )
}

export default VideoPanel;