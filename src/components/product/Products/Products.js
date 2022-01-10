import { Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import Loader from "../../layout/Loader/Loader";
import MetaData from "../../layout/MetaData/MetaData";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

const categories = ["Watch", "Airpod", "Laptop"];
const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    filteredProductsCount,
    productsPerPage,
    totalProductsCount,
  } = useSelector((state) => state.products);
  const [category, setCategory] = useState("");
  const alert = useAlert();
  const [price, setPrice] = useState([0, 2000]);
  const [ratings, setRatings] = useState(0);
  // change price on range
  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };
  const [currentPage, setCurrentPageNo] = useState(1);
  // changing current page on change
  const currentPageHanlder = (e) => {
    setCurrentPageNo(e);
  };

  // Loading Products and showint Error if exists
  useEffect(() => {
    if (error) {
      alert.error(error);
      // I could've also just retuen the alert here..but it's good practice to have a clearFunc for clearing errors
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, ratings, category));
  }, [dispatch, error, alert, keyword, currentPage, price, ratings, category]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Products || ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
          {/* Filter by price*/}
          <div className="filterBox">
            <Typography style={{ textAlign: "left" }}>Price</Typography>
            <Slider
              color="warning"
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
              aira-labelledby="range-slider"
            />
            {/* filter by category */}
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            {/* filter by rating */}
            <fieldset>
              <Typography component="legend">Ratings</Typography>
              <Slider
                color="warning"
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {/* Pagination */}
          {productsPerPage < filteredProductsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={productsPerPage}
                totalItemsCount={totalProductsCount}
                onChange={currentPageHanlder}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
