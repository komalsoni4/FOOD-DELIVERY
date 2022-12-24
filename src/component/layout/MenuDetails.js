import { ProductionQuantityLimits } from '@mui/icons-material';
import React, { Fragment, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import { getProductDetails, clearErrors } from '../../actions/productAction';
import ReviewCard from "./ReviewCard.js"
import Loader from "../layout/Loader/Loader";
const MenuDetails = () => {
    const {id}=useParams();
     const dispatch=useDispatch();

    const {product,loading,error}=useSelector(
        (state)=>state.productDetails);
        
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);
//    console.log(product.name);

  return (
   <Fragment>
    {loading ? <Loader/> :
    ( <Fragment>
        <div className="center ProductDetails">
       
        <h1>ProductDetail</h1>
        <h1 className="reviewsHeading">Reviews</h1>
        {product.reviews && product.reviews[0] ?(
            <div className="reviews">
                {product.reviews &&
                product.reviews.map((review)=><ReviewCard review={review}/>)}
                </div>
        ):(<p className="noReviews">No Reviews</p>)}
    
    </div>
       
    </Fragment>)}
   </Fragment>
  )
}

export default MenuDetails