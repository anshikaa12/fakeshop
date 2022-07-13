import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="filter flex-row">
        <h3 className="h3-text">Filters</h3>
        <p className="h4-text">Clear All</p>
      </div>
      <hr className="side-hr" />
      <ul className="sidebar-list flex-col">
        <li className="sidebar-item">
          <p className="h4-text filter-head">RATING</p>
          <label className="radio-list">
            4 stars and above
            <input type="radio" name="radio" />
            <span className="radio"></span>
          </label>
          <label className="radio-list">
            3 stars and above
            <input type="radio" name="radio" />
            <span className="radio"></span>
          </label>
          <label className="radio-list">
            2 stars and above
            <input type="radio" name="radio" />
            <span className="radio"></span>
          </label>
          <label className="radio-list">
            1 stars and above
            <input type="radio" name="radio" />
            <span className="radio"></span>
          </label>
        </li>
        <hr className="side-hr" />
        <li className="sidebar-item">
          <p className="h4-text filter-head">CATEGORY</p>
          <label className="check-list">
            men's clothing
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-list">
            jewelery
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-list">
            electronics
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="check-list">
            women's clothing
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
