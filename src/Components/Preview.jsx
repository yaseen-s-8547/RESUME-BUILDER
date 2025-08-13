import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Preview() {
  return (
    <>
    <Box component="section" sx={{ p: 2,textAlign:'center' }}>
      <paper elevation={3} sx={{p:2,textAlign:'center'}}>
        <h2>Name</h2>
        <h6>Job Title</h6>
        <p><span>Location</span>|<span>Email</span>|<span>Phone</span></p>

      </paper>
    </Box>
    </>
  )
}

export default Preview