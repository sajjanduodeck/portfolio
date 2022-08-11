import { Typography } from '@mui/material'
import React from 'react'

function Experience() {
  return (
    <div style={{margin:60,paddingBottom:'20%'}}>
       <Typography variant='h2'>From e-commerce<br/> platforms to virtual<br/> worlds.</Typography>
       <Typography>Mostly a trip down memory lane. To be expanded one day.</Typography>
      <div style={{marginTop:200}}>
      <hr/>
         <Typography variant='h4' sx={{color:'yellow',textAlign:'center'}}>SKILLS</Typography>
         <ul style={{fontSize:20}}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>BootStrap</li>
          <li>React JS</li>
          <li>React Native</li>
          <li>MVC</li>
         </ul>
      </div>
      <hr/>
      <Typography variant='h4' sx={{textAlign:'center',color:'yellow',marginTop:2}} >In Which Company I Work</Typography>
      <div >
        <ul style={{fontSize:20,}}>
          <li>QuoDeck</li>
          <li>Techpro CompSoft</li>
          <li>TNS</li>
        </ul>
      </div>
      <hr/>
      <div>
        <Typography variant='h4' sx={{color:'yellow',textAlign:'center'}}>I Work On Project</Typography>
        <div style={{display:'flex'}}>
           <div>
              <ul style={{fontSize:20,}}>
                <li >WeekCheck (React Js)</li>
                <li style={{marginTop:30}}>BMI (React Native)</li>
              </ul>
              <br/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Experience