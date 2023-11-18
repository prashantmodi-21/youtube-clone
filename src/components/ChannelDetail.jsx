import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../utils/FetchFromApi'
import {Box, Container, Typography, Stack, CircularProgress } from '@mui/material'
import VideosCard from './VideosCard'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [channelVideos, setChannelVideos] = useState()
  const {id} = useParams()
  useEffect(()=>{
    FetchApi(`channels?part=snippet&id=${id}`)
    .then((data)=>{
      setChannelDetail(data.items[0])
    })
    FetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setChannelVideos(data.items)
    })
  }, [])
  return (
    channelDetail && <>
    <div style={{
      background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)', height: '250px'}}>
    </div>
    <Container maxWidth='lg'>
      <Box style={{textAlign: 'center', marginTop: '-120px'}}>
        <img
        src={channelDetail.snippet.thumbnails.medium.url}
        alt={channelDetail.snippet.title}
        style={{borderRadius: '50%', margin: '8px 0'}}/>
        <Typography variant='h4'>{channelDetail.snippet.title}</Typography>
        <Typography variant='subtitle2' gutterBottom>{channelDetail.snippet.description.slice(0, 60)}...</Typography>
        <Typography variant='subtitle2' sx={{color: '#727171'}} gutterBottom><span style={{color: '#FC1503'}}>SUBSCRIBERS</span> {parseInt(channelDetail.statistics.subscriberCount).toLocaleString('en-IN')}</Typography>
      </Box>
      <Stack direction='row' gap={2} flexWrap='wrap' justifyContent='center' sx={{marginTop: '2rem'}}>
      {!channelVideos ? <CircularProgress/> : channelVideos.map((video)=>(
        <VideosCard key={video.id.channelId} video={video}/>
      ))}
      </Stack>
    </Container>
    </> 

  )
}

export default ChannelDetail
