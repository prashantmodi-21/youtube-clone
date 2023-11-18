import { Box, Stack } from '@mui/material'
import React from 'react'
import VideosCard from './VideosCard'

const Videos = ({videos}) => {
  return (
    <Stack direction={{xs: 'column', sm: 'row'}} flexWrap='wrap' gap={2}>
          {videos && videos.map((video)=>(
            <Box key={video.id.channelId ? video.id.channelId : video.id.videoId}>
              <VideosCard video={video}/>
            </Box>
           ))}
        </Stack>
  )
}

export default Videos
