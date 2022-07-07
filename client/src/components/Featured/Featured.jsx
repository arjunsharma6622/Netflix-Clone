import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name='gener' id='gener'>
                    <option>Gener</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://wallpapersmug.com/download/1600x900/fadc0f/avengers-age-of-ultron-superhero-movie-poster.jpg" alt="" width={"100%"}/>
        <div className="info">
            <img src="https://www.freepnglogos.com/uploads/avengers-png-logo/avengers-logo-png-transparent-avengers-logo-images-7.png" alt="" className='trailer_img'/>
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo sunt praesentium cupiditate distinctio commodi obcaecati alias temporibus architecto ab!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured