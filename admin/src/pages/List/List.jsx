import { Link } from "react-router-dom";
import "./List.css";
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function List() {

    const location = useLocation();
    const listData = location.list;

    const {dispatch} = useContext(MovieContext)


    const [list, setList] = useState({_id : listData._id});





    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value
        setList({ ...list, [e.target.name]: value })
    }



    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     updateMovie(list, dispatch)
    // }


  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">

          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{listData.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{listData._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre :</span>
                      <span className="productInfoValue">{listData.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Type :</span>
                      <span className="productInfoValue">{listData.type}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>List Title</label>
                  <input type="text" placeholder={listData.title} onChange={handleChange} name="title"/>
                  <label>Type</label>
                  <input type="text" placeholder={listData.type} onChange={handleChange} name="year"/>
                  <label>Genre</label>
                  <input type="text" placeholder={listData.genre} onChange={handleChange} name="genre"/>

              </div>
              {/* <div className="productFormRight">
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div> */}
          </form>
      </div>
    </div>
  );
}
