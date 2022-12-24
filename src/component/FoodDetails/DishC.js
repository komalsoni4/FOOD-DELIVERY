import React from 'react'
import chatImg from "	"
const DishC = () => {
  return (
    <section className="two-col-sec section">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="sec-img mt-5">
                    <img src={chatImg} alt="ChatImage"/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="sec-text">
                    <h2 className="xxl-title">Dil Punjabi</h2>
                    <p>At Dil Punjabi, we are dedicated to bringing the authentic flavors of Punjab to your
                         plate. Our dishes are made using traditional recipes, straight from the heart of Punjab. 
                         And just like your grandma’s recipe, our food is filled with love and loads of makhan (butter).</p>
                    <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum
                        voluptas magnam sed ad illum? Minus officiis quod deserunt.</p>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default DishC