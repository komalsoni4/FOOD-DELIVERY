import React from 'react'
import title from "../images/title-shape.svg";
const Plan = () => {
  return (
    <section className="blog-sec section" id="plans">
                    <div className="sec-wp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="sec-title text-center mb-5">
                                        <p className="sec-sub-title mb-3"> Subscription Plan</p>
                                        <div className="sec-title-shape mb-4">
                                            <img src={title} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-box">
                                        <div className="blog-text">
                                            <p className="blog-date">Rs. 1400</p>
                                            <a href="#" className="h4-title">Weekly Subscription.</a>
                                            <p>Users in this subscription will get get the food delivery for one week, three time a day
                                                Menu for the thali you can check in Menu section.</p>
                                            <a href="#" className="sec-btn">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-box">
                                        <div className="blog-text">
                                            <p className="blog-date">Rs. 5400</p>
                                            <a href="#" className="h4-title">Monthly Subscription.</a>
                                            <p>Users in this subscription will get get the food delivery for one month, three time a day
                                                Menu for the thali you can check in Menu section.</p>
                                            <a href="#" className="sec-btn">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-box">
                                        <div className="blog-text">
                                            <p className="blog-date">Rs 13500</p>
                                            <a href="#" className="h4-title">Quarterly Subscription</a>
                                            <p>Users in this subscription will get get the food delivery for three months, three time a day
                                                Menu for the thali you can check in Menu section.</p>
                                            <a href="#" className="sec-btn">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

  )
}

export default Plan