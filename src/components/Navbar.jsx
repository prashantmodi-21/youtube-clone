import { Box, Button, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import { logo } from '../utils/constants'
import { Brightness4, Brightness7, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react'
const Navbar = ({mode, prevMode}) => {
  const [searchQuery, setSearchQuery] = useState()
  return (
    <Stack direction='row' justifyContent='space-between' sx={{padding: '8px 1rem'}}>
      <Link to={'/'}>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <img
        src={logo}
        height='40px'
        />
        <Typography variant='subtitle1' sx={{marginLeft: '4px'}}>Youtube</Typography>
      </div>
      </Link>
      <Stack direction={'row'} alignItems={'center'}>
      <Paper sx={{padding: '4px 12px', borderRadius: '20px'}}>
        <TextField variant='standard' className='search-bar' placeholder='Search...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <Link to={`/search/${searchQuery}`}><Button color='error'><Search/></Button></Link>
      </Paper>
      <IconButton onClick={()=>mode(!prevMode)}>{prevMode === false ? <Brightness4/> : <Brightness7/>}</IconButton>
      </Stack>
    </Stack>
  )
}

export default Navbar
