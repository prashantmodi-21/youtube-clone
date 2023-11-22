import { Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const VideosCard = ({video}) => {
  const ChannelCard = ()=>{
    return(
      <div className='video-card' style={{textAlign: 'center', marginBottom: '1rem'}}>
      <Link to={`/channel/${video.snippet.channelId}`}><img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{height: '140px', width: '140px', borderRadius: '50%', margin: '8px 0'}}
      /></Link>
      <div>
        <Link to={`/channel/${video.snippet.channelId}`}><Typography variant='h5' gutterBottom>{video.snippet.title}</Typography>
        <Button variant='contained' color='error'>Checkout</Button></Link>
      </div>
    </div>
    )
  }
  return (
    (video.snippet.title === video.snippet.channelTitle ? <ChannelCard /> : <Card className='video-card'>
    <Link to={`/video/${video.id.videoId}`}><CardMedia
    component='img'
      src={!video.snippet.thumbnails.medium?.url ? video.snippet.thumbnails.default.url : video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
    />
    <Stack sx={{margin: '1rem'}}>
      <Typography variant='subtitle2' gutterBottom>{video.snippet.title.slice(0, 40)}...</Typography>
      <Link to={`/channel/${video.snippet.channelId}`}><Typography variant='subtitle2' sx={{fontSize: '10px'}}>{video.snippet.channelTitle}</Typography></Link>
    </Stack>
    </Link>
  </Card>)
    
  )
}

export default VideosCard