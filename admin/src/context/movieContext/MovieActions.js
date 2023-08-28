export const getMoviesStart = () => ({
    type : "GET_MOVIES_START"
});
export const getMoviesSuccess = (movies) => ({
    type : "GET_MOVIES_SUCCESS",
    payload : movies,
});
export const getMoviesFailure = () => ({
    type : "GET_MOVIES_FAILURE"
});




export const deleteMovieStart = () => ({
    type : "DELETE_MOVIE_START"
});
export const deleteMovieSuccess = (id) => ({
    type : "DELETE_MOVIE_SUCCESS",
    payload : id,
});
export const deleteMovieFailure = () => ({
    type : "DELETE_MOVIE_FAILURE"
});




export const createMoviesStart = () => ({
    type : "CREATE_MOVIE_START"
});
export const createMoviesSuccess = (movie) => ({
    type : "CREATE_MOVIE_SUCCESS",
    payload : movie,
});
export const createMoviesFailure = () => ({
    type : "CREATE_MOVIE_FAILURE"
});