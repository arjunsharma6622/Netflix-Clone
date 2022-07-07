import React from 'react'
import "./listitem.scss"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from 'react'

const Listitem = ({num}) => {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className='listitem' 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >

        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_mas_hlf_01_2.jpg" alt="" />

        <div className="itemInfo">
          <div className="icons">
            <PlayArrow />
            <Add />
            <ThumbUpAltOutlined />
            <ThumbDownAltOutlined />
          </div>
        

        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1995</span>
        </div>

        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat?
        </div>
        <div className="gener">
          Action
        </div>

        </div>
        
    </div>
  )
}

export default Listitem