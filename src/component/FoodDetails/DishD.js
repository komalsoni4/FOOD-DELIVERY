import React from 'react'
import i from "	"
const DishD = () => {
  return (
    <section className="two-col-sec section pt-0">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
                <div className="sec-text">
                    <h2 className="xxl-title">The chat cult</h2>
                    <p>At The Chaat Cult, we are bringing the diverse and delicious world of chaats and 
                        snacks from all corners of India to your plate. Our menu features a wide range of 
                        chaats and snacks, from tangy pani puris and spicy bhel puris to crispy sev puris and much more.</p>
                    <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum
                        voluptas magnam sed ad illum? Minus officiis quod deserunt.</p>
                </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
                <div className="sec-img">
                    <img src={i}alt="ChatImg"/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default DishD