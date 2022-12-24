import React from 'react'
import shape from "../images/title-shape.svg";
import about from "../images/about.jpg"
import video from "../images/video.mp4"
const About = () => {
  return (
    <section className="about-sec section" id="about">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="sec-title text-center mb-5">
                    <p className="sec-sub-title mb-3">About Us</p>
                    <h2 className="h2-title">Discover our <span>restaurant story</span></h2>
                    <div className="sec-title-shape mb-4">
                        <img src={shape} alt=""/>
                    </div>
                    <p>We're bringing the restaurant biz into the 21st century by making it easy
                         for foodies to chow down on their fave dishes from the comfort of their 
                         own couch. And we're not just helping restaurants stay afloat - we want 
                         to see them thrive! By connecting kitchens with extra capacity to smart, 
                         online food delivery through Dil Foods, we're paving the way for a brighter
                          future for the entire industry.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 m-auto">
                <div className="about-video">
                    <div className="about-video-img" style={{backgroundImage: `url(${about})`}}>
                    </div>
                    <div className="play-btn-wp">
                        <a href={video} data-fancybox="video" className="play-btn">
                            <i className="uil uil-play"></i>

                        </a>
                        <span>Watch The Recipe</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About