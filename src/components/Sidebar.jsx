import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Whatshot } from '@mui/icons-material';
const Sidebar = ({categoryName, category}) => {
  const categories = [
    { name: 'New', icon: <HomeIcon />, },
    { name: 'Trending', icon: <Whatshot />, },
    { name: 'Coding', icon: <CodeIcon />, },
    { name: 'ReactJS', icon: <CodeIcon />, },
    { name: 'NextJS', icon: <CodeIcon />, },
    { name: 'Music', icon: <MusicNoteIcon />,  },
    { name: 'Education', icon: <SchoolIcon />, },
    { name: 'Podcast', icon: <GraphicEqIcon />, },
    { name: 'Movie', icon: <OndemandVideoIcon />, },
    { name: 'Gaming', icon: <SportsEsportsIcon />, },
    { name: 'Live', icon: <LiveTvIcon />, },
    { name: 'Sport', icon: <FitnessCenterIcon />, },
    { name: 'Fashion', icon: <CheckroomIcon />, },
    { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
    { name: 'Comedy', icon: <TheaterComedyIcon />, },
    { name: 'Gym', icon: <FitnessCenterIcon />, },
    { name: 'Crypto', icon: <DeveloperModeIcon />, },
  ];
  return (
    <div>
    <Stack className='scroll-horizontal sidebar' direction={{xs: 'row', sm: 'column'}} alignItems='center' sx={{overflowX: 'hidden'}}>
      {categories.map((item)=>(
      <Link className='category-btn' color='text.primary' gutterBottom key={item.name} style={{background: item.name === category && '#FC1503', color: item.name === category && '#FFFFFF', textDecoration: 'none'}} onClick={()=>categoryName(item.name)}>
        <span style={{marginRight: '2px'}}>{item.icon}</span>
        <span><Typography variant='subtitle2'>{item.name}</Typography></span>
      </Link>
      ))}
      <Typography className='copyright' variant='subtitle2' style={{marginTop: '1rem'}}>Copyright@Youtube 2023</Typography>
    </Stack>
    </div>
  )
}

export default Sidebar
