import React from 'react'
import image from "	"
const DishB = () => {
  return (
    <section className="two-col-sec section pt-0">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
                <div className="sec-text">
                    <h2 className="xxl-title">House Of Andra</h2>
                    <p>At House of Andhra, we serve spicy and flavourful dishes from different regions of Andhra Pradesh.
                         Our menu features a wide range of dishes, including options from Telangana, Hyderabad, and Rayalaseema.&nbsp;</p>
                    <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum
                        voluptas magnam sed ad illum? Minus officiis quod deserunt.</p>
                </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
                <div className="sec-img">
                    <img src={image}alt="AndraImg"/>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default DishB