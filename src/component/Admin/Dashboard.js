import React, { Fragment } from 'react'
import img from "./img/people.png"
import "../Admin/style.css"
const Dashboard = () => {
  return (
   <Fragment>

<section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">DIL FOODS</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">My Store</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-message-dots"></i>
            <span className="text">Order Records</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group"></i>
            <span className="text">Team</span>
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
        <i className="bx bx-menu"></i>
        <a href="#" className="nav-link">Categories</a>
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
        <a href="#" className="notification">
          <i className="bx bxs-bell"></i>
          <span className="num">16</span>
        </a>
        <a href="#" className="profile">
          <img src={img}/>
        </a>
      </nav>
    <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>
                <a className="active" href="#">Home</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download"></i>
            <span className="text">Download PDF</span>
          </a>
        </div>

        <ul className="box-info">
          <li>
            <i className="bx bxs-calendar-check"></i>
            <span className="text">
              <h3>1432</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-group"></i>
            <span className="text">
              <h3>2052</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i className="bx bxs-dollar-circle"></i>
            <span className="text">
              <h3>Rs.7032</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Orders</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={img} />
                    <p>Kumar Ajah</p>
                  </td>
                  <td>01-12-2022</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>
                    <img src={img} />
                    <p>Hajarah Bola</p>
                  </td>
                  <td>01-12-2022</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src={img}/>
                    <p>Baller Mind</p>
                  </td>
                  <td>01-12-2022</td>
                  <td><span className="status process">Process</span></td>
                </tr>
                <tr>
                  <td>
                    <img src={img}/>
                    <p>Ajah Kumar</p>
                  </td>
                  <td>01-12-2022</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src={img}/>
                    <p>John Doe</p>
                  </td>
                  <td>01-12-2022</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="todo">
            <div className="head">
              <h3>Todos</h3>
              <i className="bx bx-plus"></i>
              <i className="bx bx-filter"></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
     </section>
    
   </Fragment>
  )
}

export default Dashboard