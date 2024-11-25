import React from 'react'
import {Paper,Typography,Grid} from '@mui/material';

const VideoItem = ({ video,onSelectedVideo}) => {
  return (
   <Grid item xs={12}>
    <Paper style ={{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={()=> onSelectedVideo(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <Typography variant="subtitle1">
            <b>{video.snippet.title}</b>
        </Typography>
    </Paper>
   </Grid>
  );
}

export default VideoItem