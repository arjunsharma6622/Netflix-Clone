import { LoginFailure, LoginStart, LoginSuccess } from "./AuthActions"
import axios from 'axios'


export const login = async (user, dispatch) => {
    dispatch(LoginStart())

    try{
        const res = await axios.post("http://localhost:8000/api/auth/login", user);
        dispatch(LoginSuccess(res.data))
    }
    catch(err){
        dispatch(LoginFailure())
    }
}