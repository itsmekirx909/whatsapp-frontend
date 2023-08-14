import { createSlice } from '@reduxjs/toolkit';

const initialState = false

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAct: (state, action)=>{
            if(action.payload.response.status){
                document.cookie = `${'hash'}=${encodeURIComponent(action.payload.response.hash)}; `
                return action.payload.response.hash
            }else{
                return action.payload.response.status
            }
        },
        signupAct: (state, action)=>{
            if(action.payload.response.status){
                document.cookie = `${'hash'}=${encodeURIComponent(action.payload.response.hash)}; `
                return action.payload.response.hash
            }else{
                return action.payload.response.status
            }
        }

    }
})

export const {loginAct, signupAct} = authSlice.actions

export default authSlice.reducer
// export default authSlice;