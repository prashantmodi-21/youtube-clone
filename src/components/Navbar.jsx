import { Button, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { logo } from '../utils/constants'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState()
  return (
    <Stack direction='row' justifyContent='space-between' sx={{margin: '8px 1rem'}}>
      <Link to={'/'}>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <img
        src={logo}
        height='40px'
        />
        <Typography variant='subtitle1' sx={{marginLeft: '4px'}}>Youtube</Typography>
      </div>
      </Link>
      <Paper sx={{padding: '4px 8px', borderRadius: '20px'}}>
        <input className='search-bar' placeholder='Search...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <Link to={`/search/${searchQuery}`}><Button color='error'><Search/></Button></Link>
      </Paper>
    </Stack>
  )
}

export default Navbar
