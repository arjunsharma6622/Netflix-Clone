import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import "./list.scss"
import Listitem from '../List item/Listitem'
import { useRef } from 'react'
import { useState } from 'react'

const List = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)

  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x-50
    if(direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${(920 + distance)}px)`

    }
    if(direction === "right" && slideNumber<5){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${(-920 + distance)}px)` 

    }
    console.log(distance)
  }

  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
            className='sliderArrow left'
            onClick={() => handleClick("left")}
            style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                <Listitem index={"0"} img={"https://i.pinimg.com/originals/83/85/98/83859852bea0341f432a15b02e1a8edc.png"}/>
                <Listitem index={"1"} img={"https://www.wallpaperup.com/uploads/wallpapers/2016/01/05/869891/3c18d08b38d0efa668d4b58cdd914a29.jpg"}/>
                <Listitem index={"2"} img={"https://cdn.abcotvs.com/dip/images/1240112_031016-Facebook-Captain-America-Civil-War-Thumb.jpg?w=1280&r=16%3A9"}/>
                <Listitem index={"3"} img={"https://georgespigot.files.wordpress.com/2012/11/looper-01.jpg"}/>
                <Listitem index={"4"} img={""}/>
                <Listitem index={"5"}/>
                <Listitem index={"6"}/>
                <Listitem index={"7"}/>
                <Listitem index={"8"}/>
                <Listitem index={"9"}/>

            </div>
            <ArrowForwardIosOutlined className='sliderArrow right'
            onClick={() => handleClick("right")}
            />
        </div>
    </div>
  )
}

export default List