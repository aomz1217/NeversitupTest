import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import '../../components/CSS/index.css'
import project_structure from '../../assets/project_structure.png'
import { useSpring, animated } from '@react-spring/web'
function Test1() {
  const [fade,setFade] = useState(false);
  const props = useSpring({
    to:{ opacity : 1},
    from:{opacity : 0},
    reset:true,
    reverse:fade,
    delay:300,
   
  })
  return (
    <div id='Test1'>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <animated.div style={props}>
          <Typography variant='h4' >Project Structure</Typography>
    <div id='favorite'>
       
         <img src={project_structure} id="structure"/>
      

    </div>
      </animated.div>
      </Box>
</div>
  )
}
export default Test1;