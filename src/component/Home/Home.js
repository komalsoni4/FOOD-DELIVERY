import About from "../layout/About"
import Plan from "../layout/Plan";
import React, { Fragment, useEffect } from 'react'
import MetaData from "../layout/MetaData"
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import news from "../images/news.jpg";
import berry from "../images/berry.png"
import main from "../images/main-b.jpg"
import leaf from "../images/leaf.png"
import br1 from "../images/brands/b1.png";
import br2 from "../images/brands/b2.png";
import br3 from "../images/brands/b3.png";
import br4 from "../images/brands/b5.png";
import br5 from "../images/brands/b4.png";
import leave from "../images/table-leaves-shape.png";
import title from "../images/title-shape.svg";
import t from "../images/testimonial-img.png"
import t1 from "../images/testimonials/t1.jpg";
import t2 from "../images/testimonials/t2.jpg";
import t3 from "../images/testimonials/t3.jpg";
import t4 from "../images/testimonials/t4.jpg";
import menu1 from "../images/dish/1.png";
import menu2 from "../images/dish/2.png";
import menu3 from "../images/dish/3.png";
import menu4 from "../images/dish/4.png";
import Menu from '../layout/Menu'
import menubg from "../images/menu-bg.png"
import tittle from "../images/title-shape.svg"
import A from "../images/menu-1.png";
import B from "../images/menu-2.png";
import C from "../images/menu-3.png";
import D from "../images/menu-4.png";
import pattern from "../images/blog-pattern-bg.png";
import faq from "../images/faq-bg.png"
const product = {
    name: "Chicken Pulao",
    images: [{ url: "#" }],
    price: "Rs. 499",
    type: "Non Veg",
    _id: "jhj",
    cal: "120",
    ratings: "4"

}
const Home = () => {

    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    );
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (
        <Fragment>
            <MetaData title="DIL FOODS" />
            <div id="viewport">
        <div id="js-scroll-content">
            <section className="main-banner" id="home">
                <div className="js-parallax-scene">
                    <div className="banner-shape-1 w-100" data-depth="0.30">
                        <img src={berry} alt="img" />
                    </div>
                    <div className="banner-shape-2 w-100" data-depth="0.25">
                        <img src={leaf} alt="leaf" />
                    </div>
                </div>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1 className="h1-title">
                                        Welcome to our
                                        <span>Tiffen</span>
                                        Services.
                                    </h1>
                                    <p>Choice of deciding your own personalized menu.
                                        Delivery through world famous dabbawalas of Mumbai.
                                    </p>
                                    <div className="banner-btn mt-4">
                                        <a href="#menu" className="sec-btn">Check our Menu</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-img-wp">

                                    <div className="banner-img" style={{ backgroundImage: `url(${main})` }} >
                                    </div>
                                </div>
                                <div className="banner-img-text mt-4 m-auto">
                                    <h5 className="h5-title">Smile</h5>
                                    <p>Lunch and Dinner at your preferred addresses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brands-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-title mb-5">
                                <h5 className="h5-title">Trusted by 20+ companies</h5>
                            </div>
                            <div className="brands-row">
                                <div className="brands-box">
                                    <img src={br1} alt="" />
                                </div>
                                <div className="brands-box">
                                    <img src={br2} alt="" />
                                </div>
                                <div className="brands-box">
                                    <img src={br3} alt="" />
                                </div>
                                <div className="brands-box">
                                    <img src={br4} alt="" />
                                </div>
                                <div className="brands-box">
                                    <img src={br5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                 <About/>
            <section className="book-table section bg-light">
                <div className="book-table-shape">
                    <img src={leave} alt="" />
                </div>

                <div className="book-table-shape book-table-shape2">
                    <img src={leave} alt="" />
                </div>

                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-title text-center mb-5">
                                    <p className="sec-sub-title mb-3">Book Table</p>
                                    <h2 className="h2-title">Opening Table</h2>
                                    <div className="sec-title-shape mb-4">
                                        <img src={title} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="book-table-info">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="table-title text-center">
                                        <h3>Monday to Thrusday</h3>
                                        <p>9:00 am - 22:00 pm</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="call-now text-center">
                                        <i className="uil uil-phone"></i>
                                        <a href="tel:+91-8866998866">+91 - 8866998866</a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="table-title text-center">
                                        <h3>Friday to Sunday</h3>
                                        <p>11::00 am to 20:00 pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section style={{ backgroundImage: `url(${menubg})` }}
                className="our-menu section bg-light repeat-img" id="menu">
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-title text-center mb-5">
                                    <p className="sec-sub-title mb-3">our menu</p>
                                    <h2 className="h2-title">wake up early, <span>eat fresh & healthy</span></h2>
                                    <div className="sec-title-shape mb-4">
                                        <img src={tittle} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-tab-wp">
                            <div className="row">
                                <div className="col-lg-12 m-auto">
                                    <div className="menu-tab text-center">
                                        <ul className="filters">
                                            <div className="filter-active"></div>
                                            <li className="filter" data-filter=".all, .breakfast, .lunch, .dinner">
                                                <img src={A} alt="" />
                                                All
                                            </li>
                                            <li className="filter" data-filter=".breakfast">
                                                <img src={B} alt="" />
                                                Breakfast
                                            </li>
                                            <li className="filter" data-filter=".lunch">
                                                <img src={C} alt="" />
                                                Lunch
                                            </li>
                                            <li className="filter" data-filter=".dinner">
                                                <img src={D} alt="" />
                                                Dinner
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-list-row">
                            <div className="row g-xxl-5 bydefault_show" id="menu-dish">
                                {products && products.map((product) => <Menu product={product} />)}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-sec section-repeat-img" style={{ backgroundImage: `url(${faq})` }}>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-title text-center mb-5">
                                    <p className="sec-sub-title mb-3">faqs</p>
                                    <h2 className="h2-title">Frequently <span>asked questions</span></h2>
                                    <div className="sec-title-shape mb-4">
                                        <img src={title} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="faq-row">
                            <div className="faq-box">
                                <h4 className="h4-title">What are the login hours?</h4>
                                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                                    vitae fugit laboriosam dolor distinctio.</p>
                            </div>
                            <div className="faq-box">
                                <h4 className="h4-title">What do i get my refund?</h4>
                                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                                    vitae fugit laboriosam dolor distinctio. Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="faq-box">
                                <h4 className="h4-title">How long it will take food to arrive?</h4>
                                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                                    vitae fugit laboriosam dolor distinctio.</p>
                            </div>
                            <div className="faq-box">
                                <h4 className="h4-title">Does your restaurant has both veg and non veg?</h4>
                                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                                    vitae fugit laboriosam dolor distinctio. Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Voluptates, distinctio?</p>
                            </div>
                            <div className="faq-box">
                                <h4 className="h4-title">What is cost of food delivery?</h4>
                                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                                    vitae fugit laboriosam dolor distinctio. Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nam officiis ducimus, cum enim repudiandae animi.</p>
                            </div>
                            <div className="faq-box">
                                <h4 className="h4-title">Who is eligible for pro membership?</h4>
                                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                                    vitae fugit laboriosam dolor distinctio. </p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <div className="bg-pattern bg-light repeat-img"
                style={{ backgroundImage: `url(${pattern})` }}>
                 <Plan/>

                <section className="newsletter-sec section pt-0">
                    <div className="sec-wp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="newsletter-box text-center back-img white-text"
                                        style={{ backgroundImage: `url(${news})` }}>
                                        <div className="bg-overlay dark-overlay"></div>
                                        <div className="sec-wp">
                                            <div className="newsletter-box-text">
                                                <h2 className="h2-title">Subscribe our newsletter</h2>
                                                <p>We are here to provide you fast delivery and fast service</p>
                                            </div>
                                            <form action="#" className="newsletter-form">
                                                <input type="email" className="form-input"
                                                    placeholder="Enter your Email Here" required />
                                                <button type="submit" className="sec-btn primary-btn">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
      </div>   
        </Fragment>

    )
}

export default Home