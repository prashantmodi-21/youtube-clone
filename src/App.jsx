import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoPlayer } from './components'
import { StyledEngineProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FetchApi } from './utils/FetchFromApi'


function App() {
  const [category, setCategory] = useState('New')
  const [videos, setVideos] = useState(null)
  useEffect(()=>{
    FetchApi(`search?part=snippet&q=${category}`)
    .then((data)=>{
      setVideos(data.items)
    })
  }, [category])

  const handleSearch = (query)=>{
   setCategory(query)
  }
  return (
    <>
    <StyledEngineProvider injectFirst />
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed videos={videos} category={category} categoryName={handleSearch}/>}/>
        <Route path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:query' element={<SearchFeed />}/>
        <Route path='/video/:id' element={<VideoPlayer />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
