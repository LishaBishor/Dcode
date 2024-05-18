import { Button, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

const Webcompile = () => {
  return (
    <div >
         <Typography variant='h1'>Web-based Compiler</Typography>

         <textarea id="code" rows="10" cols="50" placeholder="Enter your code here"></textarea>
         <div style={{ display: 'flex', alignItems: 'center' }}>
         <div style={{ marginRight: '20px' }}>
    <InputLabel id="demo-simple-select-label">Language</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
      label="Language"
     >
    <MenuItem value="solidity">Solidity</MenuItem>
    <MenuItem value="rust">Rust</MenuItem>
    <MenuItem value='motoko'>Motoko</MenuItem>
  </Select>
  </div><div>
   
     <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
     >
    <MenuItem value='easy'>Easy</MenuItem>
    <MenuItem value='medium'>Medium</MenuItem>
    <MenuItem value='hard'>Hard</MenuItem>
  </Select>
  </div>
  </div>
    
    <Button variant="contained">Compile</Button>
    </div>
  )
}

export default Webcompile