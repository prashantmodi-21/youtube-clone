import { Box, Stack } from '@mui/material'
import React from 'react'
import VideosCard from './VideosCard'

const Videos = ({videos}) => {
  return (
    <Stack direction={{xs: 'column', sm: 'row'}} flexWrap='wrap' gap={{xs: 2, sm: 0}}>
          {videos && videos.map((video)=>(
            <Box key={video.id.channelId ? video.id.channelId : video.id.videoId} sx={{margin: '1rem'}}>
              <VideosCard video={video}/>
            </Box>
           ))}
        </Stack>
  )
}

export default Videos
