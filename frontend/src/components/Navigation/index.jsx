import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import NotFoundImage from 'C:/Users/mmman/OnlineBook/frontend/src/assets/imgs/unnamed.png'
import './style.css'; 

function Navbar() {
  return (


    <div className="main">
      <nav className="navbar">
       
        <div className="left-section">
          <img src={NotFoundImage} alt="Logo" className="logoleft" width='30' height='35' />
        </div>

        <div className="middle-section">
          <ul className="nav-links">
            <li>
              Home
            </li>
            <li>
              About Us
            </li>
            <li>
              Books
            </li>
            <li>
              New Releases
            </li>
            <li>
              Contact Us
            </li>
            <li>
              Blog
            </li>
          </ul>
        </div>

        <div className="right-section">
          <div className="profile">
            <a to="/profile">🧑‍💻</a>
          </div>
          <div className="divider">|</div> 
          <div className="wishlist">
            <a to="/wishlist">🧺</a>
          </div>
          <div className="divider">|</div>
          <div className="likee">
            <a to="/likee">🖤</a>
          </div>
        </div>


        <Outlet />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>


  );
}

export default Navbar;