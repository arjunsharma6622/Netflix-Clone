import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./ListActions"
import axios from "axios"

export const getLists = async (dispatch) => {
    dispatch(getListsStart())

    try{
        const res = await axios.get("http://localhost:8000/api/lists/", {
            headers: {
                "token": "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(getListsSuccess(res.data))
    }
    catch(err){
        dispatch(getListsFailure())
        console.log(err)
    }
}




export const createList = async (list, dispatch) => {
    dispatch(createListStart())

    try{
        const res = await axios.post(`http://localhost:8000/api/lists/`, list , {
            headers: {
                "token": "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createListSuccess(res.data))
    }
    catch(err){
        dispatch(createListFailure())
    }
}


// export const updateMovie = async (movie, dispatch) => {
//     dispatch(updateMoviesStart())

//     try{
//         const res = await axios.put(`http://localhost:8000/api/movie/${movie._id}`, movie, {
//             headers: {
//                 "token" : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
//             }
//         })
//         dispatch(updateMoviesSuccess(res.data))
//     }
//     catch(err){
//         dispatch(updateMoviesFailure())
//     }
// }


export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart())

    try{
        await axios.delete(`http://localhost:8000/api/lists/${id}`, {
            headers: {
                "token": "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteListSuccess(id))
    }
    catch(err){
        dispatch(deleteListFailure())
    }
}