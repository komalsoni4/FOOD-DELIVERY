import axios from "axios";
import { ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCESS ,ALL_PRODUCT_REQUEST,ALL_PRODUCT_DETAILS_FAIL, ALL_PRODUCT_DETAILS_SUCCESS ,ALL_PRODUCT_DETAILS_REQUEST,CLEAR_ERRORS} from '../constants/productConstants';
import React from 'react'

export const getProduct = ()=>async(dispatch) => {
  try {
    dispatch({type:ALL_PRODUCT_REQUEST});
    const {data} =await axios.get("/dilfoods/menu");
    dispatch({
        type:ALL_PRODUCT_SUCCESS,
        payload:data,
    });
  } catch (error) {
    dispatch({
        type:ALL_PRODUCT_FAIL,
        payload:error.response.data.message,
    });
  }
}


export const getProductDetails = (id)=>async(dispatch) => {
  try {
    dispatch({type:ALL_PRODUCT_DETAILS_REQUEST});
    const {data} =await axios.get(`/dilfoods/menu/${id}`);
    dispatch({
        type:ALL_PRODUCT_DETAILS_SUCCESS,
        payload:data.product,
    });
  } catch (error) {
    dispatch({
        type:ALL_PRODUCT_DETAILS_FAIL,
        payload:error.response.data.message,
    });
  }
}

export const clearErrors=()=>async (dispatch)=>{
   dispatch({type:CLEAR_ERRORS});
}