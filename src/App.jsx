import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoPlayer } from './components'
import { Box, CssBaseline, LinearProgress, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FetchApi } from './utils/FetchFromApi'


function App() {
  const [category, setCategory] = useState('New')
  const [videos, setVideos] = useState(null)
  const [progress, setProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
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

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleSearch = (query)=>{
    setCategory(query)
  }
  const progressBar = (value)=>{
    setProgress(value)
  }
  const chgMode = (option)=>{
    setDarkMode(option)
  }
  return (
    <>
    <ThemeProvider theme={darkMode && darkTheme}>
      <CssBaseline/>
    <StyledEngineProvider injectFirst />
      <BrowserRouter>
      <Box sx={progress === 0 ? {width: "0"} : {width: '100%'}}>
        <LinearProgress variant="determinate" value={progress} color='error'/>
      </Box>
      <Navbar mode={chgMode} prevMode={darkMode}/>
      <Routes>
        <Route path='/' element={<Feed videos={videos} category={category} categoryName={handleSearch}/>}/>
        <Route path='/channel/:id' element={<ChannelDetail result={progressBar}/>}/>
        <Route path='/search/:query' element={<SearchFeed keyword={handleSearch} searchResult={videos}/>}/>
        <Route path='/video/:id' element={<VideoPlayer result={progressBar}/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
