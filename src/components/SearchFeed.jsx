import { Box, CircularProgress, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../utils/FetchFromApi'
import VideosCard from './VideosCard'

const SearchFeed = ({keyword, searchResult}) => {
  const {query} = useParams()
  useEffect(()=>{
    keyword(query)
  }, [query])
  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' gutterBottom>Search Results For: <span style={{color: '#FC1503'}}>{query}</span></Typography>
      <Stack direction='row' justifyContent='center' flexWrap='wrap'>
        {!searchResult ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}><CircularProgress /></div> : searchResult.map((video)=>(
          <Box key={video.id.videoId ? video.id.videoId : video.id.channelId} sx={{margin: '1rem'}}><VideosCard video={video}/></Box>
        ))}
      </Stack>
    </Container>
  )
}

export default SearchFeed
