import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav">
          <h2 className="h2-text">
            <span className="prime-color-text">Fake</span>
            <span>Shop</span>
          </h2>
        </div>
        <div className="mid-nav">
          <ul className="nav-links">
            <li className="li-link">Explore</li>
            <li className="li-link">Products</li>
          </ul>
        </div>
        <div className="last-nav">
          <input type="text" className="input-box" placeholder="Search" />
          <ul className="nav-connect nav-links flex-row">
            <li className="connect-link h6-text flex-col-center">
              <i className="fas fa-user  h5-text"></i>
              <p className="h6-text i-link-nav-name">User</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
