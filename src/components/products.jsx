import React from "react";
import { useFilterContext } from "../context/filterContext";
import { useProducts } from "../sevices/allProducts";
import { ratingSortedList, categorySortedList } from "../context/filterReducer";
import { useNavigate } from "react-router-dom";
function Products() {
  const { products } = useProducts();
  const { filterState } = useFilterContext();
  const updatedRatedList =
    filterState.rating !== ""
      ? ratingSortedList(filterState.rating, products)
      : products;
  const updatedCategoryList =
    filterState.categories.length !== 0
      ? categorySortedList(filterState.categories, updatedRatedList)
      : updatedRatedList;
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/${id}`;
    navigate(path);
  };
  return updatedCategoryList.map((data) => {
    return (
      <div className="e-basic-card" key={data.id}>
        <div className="e-card-badge">
          {data.rating.rate}
          <i className="fas fa-star h6-text"></i>
        </div>
        <img
          src={data.image}
          alt=""
          className="e-card-img"
          onClick={() => routeChange(data.id)}
        />
        <div className="card-body">
          <h5 className="h5-text">{data.title}</h5>
          <span className="e-card-subtext">FakeStore provides the best.</span>
          <div className="card-price flex-row">
            <span className="prime-color-text h4-text">₹{data.price}</span>{" "}
            <span className="small-grey"> Save ₹1500</span>
          </div>
          <div className="card-footer">
            <button className="mid-btn btn-primary">Add to cart</button>
            <div className="connect-part">
              <i className="far fa-heart card-icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Products;
