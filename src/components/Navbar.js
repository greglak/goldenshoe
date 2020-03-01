import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Store" className="img" />
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link to="/women" className="nav-link">
                Women
            </Link>
            </li>
            <li class="nav-item">
              <Link to="/men" className="nav-link">
                Men
            </Link>
            </li>
            <li class="nav-item">
              <Link to="/kids" className="nav-link">
                Kids
            </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
          </form>
          
          <Link to="/cart" className="ml-auto">
            <ButtonContainer cart>
              <span className="mr-2">
                <i className="fas fa-shopping-cart" />
              </span>
              cart
          </ButtonContainer>
          </Link>
        </div>
      </NavWrapper >
    );
  }
}

const NavWrapper = styled.nav`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: #fff;
      box-sizing: border-box;
      border-bottom: 2px solid var(--mainYellow);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  .nav-link {
          color: var(--mainBlue) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        outline: none;
        transition: all 0.3s ease-out;
    
    &:hover {
          color: var(--lightBlue) !important;
      }
    }
  
  .img {
          width: 3rem;
      }
    `;

export default Navbar;
