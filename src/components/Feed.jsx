import { useEffect } from 'react'
import {Sidebar, Videos} from './'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'

const Feed = ({videos, categoryName, category}) => {
  useEffect(()=>{
    categoryName("New")
  }, [])
  return (
    <Stack direction={{ xs: 'column', sm: 'row'}} sx={{margin: '1rem'}}>
      <Sidebar category={category} categoryName={categoryName}/>
      <Box>
      {!videos ? <div><Typography variant='h4' gutterBottom>No <span style={{color: '#FC1503'}}>Videos</span></Typography><div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress/></div></div> : <Typography variant='h4' gutterBottom>{category[0].toUpperCase() + category.slice(1)} <span style={{color: '#FC1503'}}>Videos</span></Typography>}
      <Videos videos={videos}/>
      </Box>
     </Stack>
  )
}

export default Feed
