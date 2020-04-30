import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">RESTAURANT</a>
          <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/Homepage">Homepage</Link>
                <Link className="nav-item nav-link" to="/Menu">Menu</Link>
                <Link className="nav-item nav-link" to="/Orders">Orders</Link> 
                <Link className="nav-item nav-link" to="/Cart ">Cart </Link>
              
              </div>
          </div>
      </nav>
    );
  }
  export default Header;        