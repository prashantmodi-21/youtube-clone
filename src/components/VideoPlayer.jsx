import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import { ThumbUp, ViewStream } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FetchApi } from '../utils/FetchFromApi'
import VideosCard from './VideosCard'
import ReactPlayer from 'react-player'

const VideoPlayer = ({result}) => {
    const [selectedVideo, setSelectedVideos] = useState()
    const [videos, setVideos] = useState()
    const {id} = useParams()
    useEffect(()=>{
        result(0)
        FetchApi(`videos?part=snippet&id=${id}`)
        .then((data)=>{
            setSelectedVideos(data.items[0])
            result(50)
        }).catch((error)=>{
            console.log(error.message)
            result(100)
        })
        FetchApi(`search?relatedToVideoId=${id}&part=snippet&type=video&maxResults=50`)
            .then((data)=>{
                setVideos(data.items)
                result(100)
            }).catch((error)=>{
                console.log(error.message)
                result(100)
            })
    }, [id])
    console.log(selectedVideo)
  return (
    videos ? <Stack direction={{md: 'row'}} spacing={4} className="player-layout">
        <Box sx={{width: '100%', height: '100%'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls={true}/>
            <Stack direction={'row'} justifyContent='space-between' sx={{margin: '1rem'}}>
            <div>
                <Typography variant='h6' gutterBottom>{selectedVideo.snippet.title}</Typography>
                <Link to={`/channel/${selectedVideo.snippet.channelId}`}><Typography variant='subtitle2'>{selectedVideo.snippet.channelTitle}</Typography></Link>
            </div>
            <Stack direction='row' alignItems='center' spacing={1}>
            <ThumbUp/><Typography variant='subtitle2'>{selectedVideo.statistics.likeCount}</Typography>
            <ViewStream/><Typography variant='subtitle2'>{selectedVideo.statistics.viewCount}</Typography>
            </Stack>
            </Stack>
        </Box>
        <Stack spacing={{md: 2}}>
        {videos.map((video)=>(
            <div key={video.id.videoId}>
            <VideosCard video={video}/>
            </div>
        ))}
        </Stack>
    </Stack> : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}><CircularProgress sx={{display: 'flex'}}/></div>
  )
}

export default VideoPlayer
