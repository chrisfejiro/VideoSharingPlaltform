import React from 'react'
import {Grid} from "@mui/material"
import VideoItem from "./VideoItem"

const VideoList = ({videos,onVideoSelect}) => {

   const listOfVideos = videos.map(video => (
    <VideoItem 
      onSelectedVideo={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
   ));
 return (
   <Grid container spacing={10}>
    {listOfVideos}
   </Grid>
  )
}

export default VideoList