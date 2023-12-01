import { Button, IconButton, Paper, Stack, Typography, Link, InputBase} from '@mui/material'
import React, { useState } from 'react'
import { logo } from '../utils/constants'
import { Brightness4, Brightness7, Search } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
const Navbar = ({mode, prevMode}) => {
  const [searchQuery, setSearchQuery] = useState()
  return (
    <Stack direction='row' justifyContent='space-between' sx={{padding: '8px 0'}}>
      <Link to={'/'} component={RouterLink} color='text.primary' sx={{textDecoration: 'none', paddingLeft: '10px'}}>
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
        <InputBase className='search-bar' placeholder='Search...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <Button to={`/search/${searchQuery}`} component={RouterLink} color='error'><Search/></Button>
      </Paper>
      <IconButton onClick={()=>mode(!prevMode)}>{prevMode === false ? <Brightness4/> : <Brightness7/>}</IconButton>
      </Stack>
    </Stack>
  )
}

export default Navbar
