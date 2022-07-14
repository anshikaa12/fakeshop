import Nav from "../components/nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => getProducts, []);
  const currentProduct = product;

  return (
    <div>
      <Nav />
      <div className="main-sec flex-col-center">
        <div className="product-card grid-50-50">
          <div className="product-img">
            <img src={currentProduct.image} alt="text" />
          </div>
          <div className="about-product flex-col">
            <h2 className="h2-text">{currentProduct.title}</h2>
            <p className="h3-text">{currentProduct.description}</p>
            <div className="price-details flex-row">
              <span className="h2-text prime-color-text">
                {currentProduct.price}
              </span>
              <del className="h3-text grey-color-text">$500</del>
            </div>
            <p className=" tax h6-text">Inclusive all tax</p>
            <hr className="side-hr" />
            <div className="icon-details flex-col">
              <div className="flex-row">
                <i className="fas fa-truck h5-text"></i>
                <p className="h5-text">Fast delivery</p>
              </div>
              <div className="flex-row">
                <i className="far fa-calendar-check h5-text"></i>
                <p className="h5-text">Currently in Stock</p>
              </div>
              <div className="flex-row product-btn">
                <button className="mid-btn btn-primary">Add to Cart</button>
                <button className="mid-btn btn-accent-outline">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
