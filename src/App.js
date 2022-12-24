
import Header from "./component/layout/Header"
import Home from "./component/Home/Home"
import About from "./component/layout/About"
import Menu from "./component/layout/Menu";
import Contact from "./component/layout/Contact"
import Plan from "./component/layout/Plan"
import Footer from "./component/layout/Footer"
import Blog from "./component/layout/Blog"
import Login from "./component/User/Login"
import Register from "./component/User/Register"
import Order from "./component/User/Order"
import Dashboard from "./component/Admin/Dashboard";
import {BrowserRouter as Router,Route,Routes}from "react-router-dom";

function App() {
  return (

    <Router>
      <Order/>
    {/* <Dashboard/> */}
     {/* <Header/> */}

      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
   {/* <MenuDetails/> */}
{/*    
          <Routes>
          <Route  path="/"element={<Home/>}/>
          <Route exact path="/about"component={About}/>
          <Route exact path="/menu"component={Menu}/>
          <Route exact path="/contact"component={Contact}/>
          <Route exact path="/plans"component={Plan}/>
          <Route exact path="/blogs"component={Blog}/>
          <Route exact path="/login" copponent={Login}/>
          <Route exact path="/register" copponent={Register}/>
          <Route exact path="/order" copponent={Order}/>
          </Routes>
        */}
         
          
       
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
