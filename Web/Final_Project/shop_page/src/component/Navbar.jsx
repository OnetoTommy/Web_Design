import React from "react";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import "../style/navbar.css";


const Navbar = () => {
  // const state = useSelector((state) => state.handleCart);
  const cart = useSelector((state) => state.handleCart);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container">
          <NavLink className="nav-link" class="navbar-brand fw-bold fs-4" to="/Navbar">
            LA COLLECTION
          </NavLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link" class="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" class="nav-link" to="/products">Products</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" class="nav-link" to="/About">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" class="nav-link" to="/AI">AI</NavLink>
              </li>
              {/* <li class="nav-item dropdown">
                <NavLink class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </NavLink>
                <ul class="dropdown-menu">
                  <li><NavLink class="dropdown-item" to="#">Action</NavLink></li>
                  <li><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><NavLink class="dropdown-item" to="#">Something else here</NavLink></li>
                </ul>
              </li> */}
              {/* <li class="nav-item">
                <NavLink class="nav-link disabled" aria-disabled="true">Disabled</NavLink>
              </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Login</NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i>Cart({totalItems})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;