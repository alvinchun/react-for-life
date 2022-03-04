import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header-container">
        <div className="Header-logoLockup">
          <span className="Header-title">E-scooter Emporium</span>
          <img src="/assets/logo.png" className="Header-logo" alt="logo" />
        </div>
        <div>
          <i className="material-icons">shopping_cart</i>
        </div>
      </div>
    );
  }
}

export default Header;
