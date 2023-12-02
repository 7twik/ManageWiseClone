import React from 'react'
import './Mid.css'
import { Box, Image } from '@chakra-ui/react'
const Mid = () => {
  return (
    <div className='midtop' id="mid">
        <div className='textbox'>
        🔥 PREMIER FEATURES
        </div>
        <div className="mid2">
            Discover our product's  <span style={{color:"orange"}}>Capabilities</span>
        </div>
        <div className='head3'>
            Don't settle for mediocrity - embrace the future of management with Manage Wise.
        </div>
        <div className='mid3'>
            <Box className='mid31' w='100%' p={4} color='white'>
                <span style={{backgroundColor:"white"}}>⭐️</span><br/>  
                Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
            </Box>
            <img className='mid32' src="./hqimg3.jpg" alt="hqimg3" />
        </div>
        <div className='mid3'>
            <Box className='mid41' w='100%' p={4} color='white'>
                <Image src="./hqimg4.jpg" alt="alt" />  
                <div className='mid42'>Flexible Scheduling</div>
                <div  className='mid43'>Stay productive with our flexible scheduling system</div>
            </Box>
            <Box className='mid41' w='100%' p={4} color='white'>
            <Image src="./hqimg5.jpg" alt="alt" />  
            <div className='mid42'>Easy Communication</div>
                <div  className='mid43'>Collaborate seamlessly with your team in real-time</div>
            </Box>
            <Box className='mid41' w='100%' p={4} color='white'>
            <Image src="./hqimg6.jpg" alt="alt" />  
                <div className='mid42'>Analytics</div>
                <div  className='mid43'>Gain valuable insights with our advanced analytics feature</div>
            </Box>
        </div>
    </div>
  )
}

export default Mid