import { useContext, useEffect, useState } from "react";
import "./NewList.css";
// import storage from "../../fbase";
import app from "../../firebase"; // Import as default
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from '../../context/movieContext/MovieContext'
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
const storage = getStorage(app);





export default function NewList() {


  const [list, setList] = useState(null)


  const { dispatch } = useContext(ListContext)
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext)



  useEffect(() => {
    getMovies(dispatchMovie)
  }, [dispatchMovie])


  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value })
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value)
    setList({ ...list, [e.target.name]: value })
  }

  console.log(list)

  const handleSubmit = (e) => {
    e.preventDefault()
    createList(list, dispatch)
  }



  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm" style={{display: "flex", alignItems: "start"}}>

        <div className="formLeft">


          <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder="Romantic Movies" name="title" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Genre</label>
            <input type="text" placeholder="Romance" name="genre" onChange={handleChange} />
          </div>

          <div className="addProductItem">
            <label>Type</label>
            <select name="type" id="" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>


        </div>


        <div className="formRight">
          <div className="addProductItem">
            <label>Content / Movies</label>
            <select multiple name="content" id="" onChange={handleSelect} style={{ height: "200px" }}>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>{movie.title}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
