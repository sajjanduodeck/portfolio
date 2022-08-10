import { Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{display:'flex', color:'white'}}>
        <div style={{marginTop:120,marginLeft:90}}>
            <Typography variant='h3' >I'M Sajjan,a <br/>Web Developer</Typography>
            <Typography sx={{fontSize:15,marginTop:2}}>
             Leadership demonstrates to employers your <br/>ability to manage and supervise a team<br/>A strong work ethic means you perform your job 
            </Typography>
        </div>
        <div style={{marginLeft:400,marginTop:50}}>
          <div>
                <Typography variant='h5' sx={{color:'yellow'}}>
                    ABOUT ME
                </Typography>
                <Typography sx={{marginTop:4}}>
                  Lorem ipsum dolor sit ametco <br/>adipiscing elit Nullam pulvinar<br/> ligula et lectus hendrerit eget 
                </Typography>
                <Link size="small" to='/Profile' style={{textDecoration:'none',fontSize:19,color:'blue'}} >View More</Link>
                <hr/>
          </div>
          <div>
                <Typography variant='h5' sx={{color:'yellow'}}>
                    My Work
                </Typography>
                <Typography sx={{marginTop:4}}>
                  Lorem ipsum dolor sit ametco <br/>adipiscing elit Nullam pulvinar<br/> ligula et lectus hendrerit eget 
                </Typography>
                <Link size="small" to='/Experience' style={{textDecoration:'none',fontSize:19,color:'blue'}} >View More</Link>
                <hr/>
          </div>
          <div>
                <Typography sx={{color:'whitesmoke'}}><u>Browse Portfolio</u></Typography>
          </div>
          <div style={{marginTop:20}}>
                <Typography sx={{color:'yellow'}}>Follow Me</Typography>
            <div>
                 <Button sx={{color:'white'}}><FacebookIcon/></Button>
                 <Button sx={{color:'white'}}><LinkedInIcon/></Button>
                 <Button sx={{color:'white'}}><GitHubIcon/></Button>
                 <Button sx={{color:'white'}}><YouTubeIcon/></Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home