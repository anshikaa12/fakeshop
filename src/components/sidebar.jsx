import React from "react";
import { useFilterContext } from "../context/filterContext";

function Sidebar() {
  const { filterState, filterDispatch } = useFilterContext();

  return (
    <div className="sidebar">
      <div className="filter flex-row">
        <h3 className="h3-text">Filters</h3>
        <p
          className="h4-text clear"
          onClick={() => filterDispatch({ type: "CLEAR" })}
        >
          Clear All
        </p>
      </div>
      <hr className="side-hr" />
      <ul className="sidebar-list flex-col">
        <li className="sidebar-item">
          <p className="h4-text filter-head">RATING</p>
          <label className="radio-list">
            4 stars and above
            <input
              type="radio"
              name="radio"
              onChange={() => filterDispatch({ type: "RATING", payload: "4" })}
              checked={filterState.rating === "4"}
            />
            <span className="radio"></span>
          </label>
          <label className="radio-list">
            3 stars and above
            <input
              type="radio"
              name="radio"
              onChange={() => filterDispatch({ type: "RATING", payload: "3" })}
              checked={filterState.rating === "3"}
            />
            <span className="radio"></span>
          </label>
          <label className="radio-list">
            2 stars and above
            <input
              type="radio"
              name="radio"
              onChange={() => filterDispatch({ type: "RATING", payload: "2" })}
              checked={filterState.rating === "2"}
            />
            <span className="radio"></span>
          </label>
          <label className="radio-list">
            1 stars and above
            <input
              type="radio"
              name="radio"
              onChange={() => filterDispatch({ type: "RATING", payload: "1" })}
              checked={filterState.rating === "1"}
            />
            <span className="radio"></span>
          </label>
        </li>
        <hr className="side-hr" />
        <li className="sidebar-item">
          <p className="h4-text filter-head">CATEGORY</p>
          <label className="check-list">
            men's clothing
            <input
              type="checkbox"
              onChange={() =>
                filterDispatch({ type: "CATEGORY", payload: "men's clothing" })
              }
              checked={filterState.categories.includes("men's clothing")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="check-list">
            jewelery
            <input
              type="checkbox"
              onChange={() =>
                filterDispatch({ type: "CATEGORY", payload: "jewelery" })
              }
              checked={filterState.categories.includes("jewelery")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="check-list">
            electronics
            <input
              type="checkbox"
              onChange={() =>
                filterDispatch({ type: "CATEGORY", payload: "electronics" })
              }
              checked={filterState.categories.includes("electronics")}
            />
            <span className="checkmark"></span>
          </label>
          <label className="check-list">
            women's clothing
            <input
              type="checkbox"
              onChange={() =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: "women's clothing",
                })
              }
              checked={filterState.categories.includes("women's clothing")}
            />
            <span className="checkmark"></span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
