import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./featured.scss"
import axios from "axios"

const Featured = ({type, setGenre}) => {
    const [content, setContent] = useState()

    useEffect(() => {
        const getRandom = async () => {
            try{
                const res = await axios.get(`http://localhost:8000/api/movie/random?type=${type}`)
                setContent(res.data)
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getRandom()
    }, [type])


  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name='gener' id='gener' onChange={(e) => setGenre(e.target.value)}>
                    <option>Gener</option>
                    <option value="adventure">Adventure</option>
                    <option value="Action">Action</option>
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
        <img src={content && content[0].imgTitle} alt="" width={"100%"}/>
        <div className="info">
            <img src={content && content[0].img} alt="" className='trailer_img'/>
            <span className="desc">
                {content && content[0].desc}
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