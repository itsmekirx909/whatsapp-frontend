import axios from "axios";
import { loginAct, signupAct } from "../redux/authSlicer";

export const AuthFetch = async(type, number, password, dispatch) =>  {
    try {

        if(type == 'login'){
            const response = await axios.post('http://localhost:8000/api/credentials/login', {number, password})

            dispatch(loginAct({response: response.data}))
        }else{
            const response = await axios.post('http://localhost:8000/api/credentials/signup', {number, password})
           
            dispatch(signupAct({response: response.data}))
        }
    
    } catch (error) {
        console.error('Error fetching initial contacts:', error.message);
    }
};