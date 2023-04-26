import React from 'react'
import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons"
import {useLocation, Link} from "react-router-dom"

const Watch = () => {
  const location = useLocation()
  const {state} = location
  const movie = state.movie

  console.log(movie)
  return (
    <div className='watch'>
      <Link to={"/"}>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
      </Link>
        <video 
            src={movie?.video}
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