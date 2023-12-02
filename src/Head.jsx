import React from 'react'
import "./Head.css"
import Button from 'react-bootstrap/Button';
const Head = () => {
  return (
    <div className='headtop'>
        <div className='textbox'>
        👋 WELCOME TO MANAGE WISE!
        </div>
        <div className="head2">
            Empower your business with <span style={{color:"orange"}}>Strategic</span> insights
        </div>
        <div className='head3'>
        Powerful management platform designed to streamline your business operations, boost productivity, and drive success
        </div>
        <div className='head4'>
        <Button className='headbutton' variant="primary">Get Started</Button>{' '}{' '}{' '}
        <Button className='headbutton' variant="light">Whatch Demo</Button>
        </div>
        <img className="headimg" src="./hqimg1.jpg" alt="hqimg1" />
    </div>
  )
}

export default Head