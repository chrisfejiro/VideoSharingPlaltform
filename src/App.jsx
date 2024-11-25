import { useState } from 'react'
import './App.css'
import Youtube from './api/Youtube'
import {Grid} from "@mui/material"
import SearchBar from './Components/SearchBar'
import VideoDetail from './Components/VideoDetail'
import VideoList from './Components/VideoList'

function App() {

  const [ Videos,setVideos]= useState([]);
  const [ selectedVideo,setSelectedVideos]= useState({ id:{},snippet:{} });

//object destructuring {data:{items:videos}}
  async function handleSubmit(searchItem){
      const {data:{items:videos}}= await Youtube.get("search",{
        params:{
          part:"snippet",
          maxResults:5,
          key:"AIzaSyB2pgfmc_i-35BZ3Lh5u9ju_DCaliYCBe4",
          q:searchItem,
        }
      });
      console.log(videos);
      setVideos(videos);
      setSelectedVideos(videos[0]);//if the user doesnt select any video ,the default should be 0 index selected.
    }

  return (
   <Grid style={{justifyContent:"center"}} container spacing={10}>
    <Grid item xs={11}>
       <Grid container spacing ={10}>
        <Grid item xs={12}>
          <SearchBar onSubmit={handleSubmit}/>
        </Grid>
        <Grid item xs={8}>
          <VideoDetail video={selectedVideo}/>
        </Grid>
        <Grid item xs={4}>
          <VideoList videos={Videos} onVideoSelect = {setSelectedVideos} />
        </Grid>
       </Grid>
    </Grid>
   </Grid>
  );

}

export default App
