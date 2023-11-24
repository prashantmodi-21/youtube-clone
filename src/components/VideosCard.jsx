import { Button, Card, CardMedia, Stack, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const VideosCard = ({video}) => {
  const ChannelCard = ()=>{
    return(
      <div className='video-card' style={{textAlign: 'center', marginBottom: '1rem'}}>
      <Link to={`/channel/${video.snippet.channelId}`} component={RouterLink} color='text.primary' sx={{textDecoration: 'none'}}><img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{height: '140px', width: '140px', borderRadius: '50%', margin: '8px 0'}}
      />
      <div>
        <Typography variant='h5' gutterBottom sx={{textDecoration: 'none'}}>{video.snippet.title}</Typography>
        <Button variant='contained' color='error'>Checkout</Button>
      </div>
      </Link>
    </div>
    )
  }
  return (
    (video.snippet.title === video.snippet.channelTitle ? <ChannelCard /> : <Card className='video-card'>
    <Link to={`/video/${video.id.videoId}`} component={RouterLink} color='text.primary' sx={{textDecoration: 'none'}}><CardMedia
    component='img'
      src={!video.snippet.thumbnails.medium?.url ? video.snippet.thumbnails.default.url : video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
      className='card-img'
    />
    </Link>
    <Stack sx={{margin: '1rem'}}>
    <Link to={`/video/${video.id.videoId}`} component={RouterLink} color='text.primary' sx={{textDecoration: 'none'}}><Typography variant='subtitle2' gutterBottom>{video.snippet.title.slice(0, 30)}...</Typography></Link>
      <Link to={`/channel/${video.snippet.channelId}`} component={RouterLink} color='text.secondary' sx={{textDecoration: 'none'}}><Typography variant='subtitle2' sx={{fontSize: '10px'}}>{video.snippet.channelTitle}</Typography></Link>
    </Stack>
  </Card>)
    
  )
}

export default VideosCard