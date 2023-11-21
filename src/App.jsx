import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoPlayer } from './components'
import { Box, LinearProgress, StyledEngineProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FetchApi } from './utils/FetchFromApi'


function App() {
  const [category, setCategory] = useState('New')
  const [videos, setVideos] = useState(null)
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    setProgress(25)
    FetchApi(`search?part=snippet&q=${category}`)
    .then((data)=>{
      setProgress(50)
      setVideos(data.items)
      setProgress(100)
      setTimeout(() => {
        setProgress(0)
      }, 1000);
    })
  }, [category])

  const handleSearch = (query)=>{
    setCategory(query)
  }
  const progressBar = (value)=>{
    setProgress(value)
  }
  return (
    <>
    <StyledEngineProvider injectFirst />
      <BrowserRouter>
      <Box sx={progress === 0 ? {width: "0"} : {width: '100%'}}>
        <LinearProgress variant="determinate" value={progress} color='error'/>
      </Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed videos={videos} category={category} categoryName={handleSearch}/>}/>
        <Route path='/channel/:id' element={<ChannelDetail result={progressBar}/>}/>
        <Route path='/search/:query' element={<SearchFeed keyword={handleSearch} searchResult={videos}/>}/>
        <Route path='/video/:id' element={<VideoPlayer result={progressBar}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
