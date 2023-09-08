import React from "react";
import "./listitem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Listitem = ({ item, index, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movie = await axios.get(
          "http://localhost:8000/api/movie/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTBiYWFkZmY1YTEyOTg0ZmY5YjgwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDE5NzM5OSwiZXhwIjoxNjk0NjI5Mzk5fQ.dkSEJvF-xL0YOkFbJFmmM6rrVujzmLMrNhItS56VevI",
            },
          }
        );
        setMovie(movie.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  console.log(movie);

  return (
    <Link
      to={`/watch`}
      state={{ movie : movie }} // <-- state prop
      // key={video.youtubeID}
    >
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} />

        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span></span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Listitem;
