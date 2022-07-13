import React from "react";
import { useProducts } from "../sevices/allProducts";

function Products() {
  const { products } = useProducts();
  return products.map((data) => {
    return (
      <div class="e-basic-card">
        <div class="e-card-badge">
          {data.rating.rate}
          <i class="fas fa-star h6-text"></i>
        </div>
        <img src={data.image} alt="" class="e-card-img" />
        <div class="card-body">
          <h5 class="h5-text">{data.title}</h5>
          <span class="e-card-subtext">FakeStore provides the best.</span>
          <div className="card-price flex-row">
            <span className="prime-color-text h4-text">₹7000</span>{" "}
            <span className="small-grey"> Save ₹1500</span>
          </div>
          <div class="card-footer">
            <button class="mid-btn btn-primary">Add to cart</button>
            <div class="connect-part">
              <i class="far fa-heart card-icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Products;