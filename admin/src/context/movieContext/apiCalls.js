import axios from "axios"
import { getMoviesFailure, getMoviesStart } from "./MovieActions"


export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try{
        const res = await axios.get("http://localhost:8000/api/movie/", {headers : {
            "token" : localStorage.getItem("user").accessToken
        }})
        dispatch(getMoviesSuccess(res.data))
    }
    catch(err){
        dispatch(getMoviesFailure())
    }
}