import { useContext, useState } from "react";
import "./NewList.css";
// import storage from "../../fbase";
import app from "../../firebase"; // Import as default
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from "../../context/movieContext/apiCalls";
import {MovieContext} from '../../context/movieContext/MovieContext'
import { ListContext } from "../../context/listContext/ListContext";
const storage = getStorage(app);





export default function NewList() {

  const [list, setList] = useState(null)


  const {dispatch} = useContext(ListContext)
  const {movies, dispatch : dispatchMovie} = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">


        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Description" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" id="" onChange={handleChange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
