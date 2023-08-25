import MovieReducer from "./MovieReducer";
import {createContext, useReducer} from "react"

const Initial_State = {
    movies : [],
    isFetching : false,
    error : false
}

export const MovieContext = createContext(Initial_State)

export const MovieContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieReducer, Initial_State)


    return (
        <MovieContext.Provider
            value={{
                movies : state.movies,
                isFetching : state.isFetching,
                error : state.error,
                dispatch
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}
 