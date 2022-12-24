import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component"


const options={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth<600 ? 20:25,
    value:2.5,
    isHalf:true,
}
// assets/images/dish/6.png
//assets/images/dish/5.png
const Menu = ({product}) => {
  return (

                <Link className="proCard" to={`/menu/${product._id}`}>
                               <div className="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat={product.Time}>
                                    <div className="dish-box text-center">
                                        <div className="dist-img">
                                            <img src={product.images[0].url} alt=""/>
                                        </div>
                                      
                                        <div className="dish-rating">
                                       {product.ratings}
                                            <i className="uil uil-star"></i>
                                              <ReactStars className="st" {...options}/>
                                          
                                        </div>
                                        <div className="dish-title">
                                            <h3 className="h3-title">{product.name}</h3>
                                            <p>{product.Stock}</p>
                                        </div>
                                        <div className="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>{product.category}</b>
                                                </li>
                                                <li>
                                                    <p>About</p>
                                                    <b>{product.description}</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <b>{`₹${product.price}`}</b>
                                                </li>
                                                <li>
                                                    <button className="dish-add-btn">
                                                        <i className="uil uil-plus"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>     
                               </Link>
                               
                           
                   
  )
}

export default Menu