import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/productListing";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
