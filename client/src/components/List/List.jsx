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
      listRef.current.style.transform = `translateX(${(530 + distance)}px)`

    }
    if(direction === "right" && slideNumber<5){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${(-530 + distance)}px)` 

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
                <Listitem num={"1"}/>
                <Listitem num={"2"}/>
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
                <Listitem />
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right'
            onClick={() => handleClick("right")}
            />
        </div>
    </div>
  )
}

export default List