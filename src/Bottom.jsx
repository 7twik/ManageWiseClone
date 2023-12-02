import React from 'react'
import './Bottom.css'
import { Box, Image } from '@chakra-ui/react'
const Bottom = () => {
  return (
    <div className='bottop'>
        <div className='textbox'>
        🤩 AND MORE...
        </div>
        <div className="bot2">
        Explore an array of features that elevate your <span style={{color:"orange"}}>Productivity</span> to new heights
        </div>
        <div className='bot3'>
            Don't settle for mediocrity - embrace the future of management with Manage Wise.
        </div>
        <div className='mid3'>
            <Box className='mid41 bot41' w='100%' p={4} color='white'>
                
                <div className='bot42'>Cross-Platform Compatibility</div>
                <div  className='mid43'>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</div>
            </Box>
            <Box className='mid41 bot41' w='100%' p={4} color='white'>
            
            <div className='bot42'>Stay Informed with Essential Notifications</div>
                <div  className='mid43'>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</div>
            </Box>
            <Box className='mid41 bot41' w='100%' p={4} color='white'>
                <div className='bot42'>Secure Data Encryption at all times</div>
                <div  className='mid43'>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</div>
            </Box>
        </div>
        <div className='gap'></div>
        <div className='textbox'>
        🤩 AND MORE...
        </div>
        <div className="bot9">
        Enable <span style={{color:"orange"}}>integration</span> with other popular tools and platforms
        </div>
        <div className='bot3'>
        Don't settle for mediocrity - embrace the future of management with Manage Wise.
        </div>
        <div className='gap'></div> 
        <img className="botimg" src="./hqimg7.jpg" alt="hqimg7" />
    </div>
  )
}

export default Bottom