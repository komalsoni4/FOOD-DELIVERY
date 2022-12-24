import React from 'react'
import pizza from "	"
const DishA = () => {
  return (
    <section className="two-col-sec section">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="sec-img mt-5">
                    <img src={pizza} alt="ChatImage"/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="sec-text">
                    <h2 className="xxl-title">Bihari Bowl</h2>
                    <p>At Bihari Bowl, we serve a wide range of dishes from Bihar, including both classic
                         comfort foods and authentic traditional recipes from Champaran and Awadh.Litti chokha 
                         in our menu is a total people pleaser and definitely worth trying.</p>
                    <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum
                        voluptas magnam sed ad illum? Minus officiis quod deserunt.</p>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}







export default DishA