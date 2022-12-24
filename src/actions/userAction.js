import{
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,REGISTER_REQUEST,
} from "../constants/userConstant"

import axios from "axios"
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST});
        const config={headers:{"Content-Type":"application/json"}};
   const {data}=await axios.post(
    `/dilfoods/login`,
    {email,password},
    config
   );
       dispatch({type:LOGIN_SUCCESS,payload:data.user}); 
    } catch(error){
          dispatch({type:LOGIN_FAIL,payload:error.response.data.message});
    }
};


export const register=(userData)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_REQUEST});
        const config={headers:{"Content-Type":"multipart/form-data"}};
   const {data}=await axios.post(
    `/dilfoods/register`,userData,
    config
   );
       dispatch({type:REGISTER_SUCCESS,payload:data.user}); 
    } catch(error){
          dispatch({type:REGISTER_FAIL,payload:error.response.data.message});
    }
};



export const clearErrors=()=> async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
};