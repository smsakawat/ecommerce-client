import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header.js";
import ProductDetails from "./components/ui/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
