import React from "react";
import Nav from "../components/nav";
import Products from "../components/products";
import Sidebar from "../components/sidebar";

function ProductListing() {
 
  return (
    <div>
      <Nav />
      <div className="flex-row">
        <Sidebar />
        <div class="column-3-grid all-products-sec">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
