import MovieReducer from "./MovieReducer";
import {createContext, useEffect, useReducer} from "react"

const Initial_State = {
    movies : [],
    isFetching : false,
    error : false
}

export const AuthContext = createContext(Initial_State)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, Initial_State)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user : state.user,
                isFetching : state.isFetching,
                error : state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
