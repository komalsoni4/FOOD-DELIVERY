import React, { Fragment } from 'react'
import "./login.css"
import img from "../Admin/img/people.png"
const Order = () => {
  return (
   <Fragment>

<section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">DIL FOODS</span>
      </a>
      <ul className="side-menu top">
        <li>
          <a href="#">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">My Orders</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Status</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group"></i>
            <span className="text">Menu</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="login.html" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
    <section id="content">
    
      <nav>
       
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" className="search-btn">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden />
        <label for="switch-mode" className="switch-mode"></label>
       
        <a href="#" className="profile">
          <img src={img}/>
        </a>
      </nav>
      </section>
    
   </Fragment>

  )
}

export default Order