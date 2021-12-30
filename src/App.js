import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header.js";
import ProductDetails from "./components/product/ProductDetails/ProductDetails";
import Products from "./components/product/Products/Products";
import Search from "./components/product/Search/Search";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:keyword" element={<Products />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
