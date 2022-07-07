import React from 'react'
import "./listitem.scss"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from 'react'

const Listitem = ({index, img}) => {

  const [isHovered, setIsHovered] = useState(false)
  const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div 
      className='listitem' 
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

        <img src={img ? img : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_mas_hlf_01_2.jpg"} alt="" />

        {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
        
    </div>
  )
}

export default Listitem