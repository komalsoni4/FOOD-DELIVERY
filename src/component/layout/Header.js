import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        
        <header className="site-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header-logo">
                        <Link to="/">
                            <h1>DIL FOODS</h1>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="main-navigation">
                        <button className="menu-toggle"><span></span><span></span></button>
                        <nav className="header-menu">
                            <ul className="menu food-nav-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/plans">Plans</Link></li>
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="header-right">
                            <form action="#" className="header-search-form for-des">
                                <input type="search" className="form-input" placeholder="Search Here..."/>
                                <button type="submit">
                                    <i className="uil uil-search"></i>
                                </button>
                            </form>
                            <a href="" className="header-btn header-cart">
                                <i className="uil uil-shopping-bag"></i>
                                <span className="cart-number">3</span>
                            </a>
                            <a href="" className="header-btn">
                                <i className="uil uil-user-md"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header