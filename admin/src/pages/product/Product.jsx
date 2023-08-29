import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

export default function Product() {

    const [movie, setMovie] = useState({});

    const location = useLocation();
    const movieData = location.movie;



    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value
        setMovie({ ...movie, [e.target.name]: value })
    }

    console.log(movie)

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movies</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">

          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movie.img} alt="" className="productInfoImg" />
                  <span className="productName">{movieData.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{movieData._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre :</span>
                      <span className="productInfoValue">{movieData.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year :</span>
                      <span className="productInfoValue">{movieData.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Limit : </span>
                      <span className="productInfoValue">{movieData.limit ? movieData.limit : "-"}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" placeholder={movieData.title} onChange={handleChange} name="title"/>
                  <label>Year</label>
                  <input type="text" placeholder={movieData.year} onChange={handleChange} name="year"/>
                  <label>Genre</label>
                  <input type="text" placeholder={movieData.genre} onChange={handleChange} name="genre"/>
                  <label>Limit</label>
                  <input type="text" placeholder={movieData.limit} onChange={handleChange} name="limit"/>
                  <label>Trailer</label>
                  <video src={movieData.trailer} controls width={"300px"} height={"300px"}/>
                  <input type="file"/>
                  <label>Video</label>
                  {/* <img src={movie.video} alt="" width={"100px"} height={"100px"}/> */}
                  <video src={movieData.video} controls width={"300px"} height={"300px"}/>
                  <input type="file"/>



              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movieData.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
