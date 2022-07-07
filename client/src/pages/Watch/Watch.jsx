import React from 'react'
import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons"

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video 
            src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
            className='video'
            autoPlay
            progress
            controls
        >

        </video>
    </div>
  )
}

export default Watch