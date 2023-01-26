import {ArrowDropDown, Notifications, Search} from '@material-ui/icons';
import { useState } from 'react';
import { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>

      <div className="container">

          <div className="leftSide">

              <img src="https://techbiote.com/wp-content/uploads/2022/01/MovieFlix.8a0c3687-1024x291.png" 
              alt="" />

              <Link to="/" className="link">
              <span>Home Page</span>
              </Link>

              <Link to="/movies" className="link">
              <span className="mainLinks">Movies</span>
              </Link>

              <Link to="/series" className="link">
              <span className="mainLinks">Series</span>
              </Link>

              <span>New and Popular</span>

              <span>My List</span>

          </div>

          <div className="rightSide">

              <Search className='rightIcon'/>

              <span>Search</span>

              <Notifications className='rightIcon'/>

              <img src="https://i.pinimg.com/originals/94/94/48/949448161c0d32fc8ed0e41d71ed5242.jpg" alt="" />

              <div className="profile">
                <ArrowDropDown className='rightIcon'/>
                <div className="options">
                  <span>Settings</span>
                  <span onClick={() => dispatch(logout())}>Log Out</span>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
