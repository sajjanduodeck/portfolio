import { Typography } from '@mui/material'
import React from 'react'

function Profile() {
  return (
    <div style={{marginLeft:80,paddingBottom:'20%'}}>
       <Typography variant='h3' sx={{color:'yellow'}} >I build value by <br/> design.</Typography>
       <div>
          <p style={{fontSize:15,marginTop:30}}>I’m Sajjan Yadav, but you can just call me Sajjan.</p>
          <p style={{fontSize:15,marginTop:30}}>Originally hailing from the UK 🇬🇧 for the last decade or so I’ve been honing my skills<br/> in design, production and management roles building products for the web, mobile,<br/> games and, more recently, VR & AR.</p>
          <p style={{fontSize:15,marginTop:30}}>I strive to create elegant solutions that surprise and delight users, while keeping<br/> complex technical dependencies in mind for implementation, scalability and<br/> developer sanity.</p>
          <p style={{fontSize:15,marginTop:30}}>I’ve worked with small, agile teams on skunkworks projects and larger development<br/> teams with product lifecycles spanning multiple years.</p>
          <p style={{fontSize:15,marginTop:30}}>Have an interesting project?</p>
          <p style={{fontSize:15,marginTop:30}}></p>
       </div>
    </div>
  )
}

export default Profile