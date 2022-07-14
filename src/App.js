import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/productListing";
import SingleProduct from "./pages/singleProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
