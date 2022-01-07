import { Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import Loader from "../../layout/Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, productsPerPage } =
    useSelector((state) => state.products);
  const alert = useAlert();
  const [price, setPrice] = useState([0, 2000]);

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
    dispatch(getProduct(keyword, currentPage, price));
  }, [dispatch, error, alert, keyword, currentPage, price]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
          {/* Filter by price,category & ratings */}
          <div className="filterBox">
            <Typography color="text.secondary" style={{ textAlign: "left" }}>
              Price
            </Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              min={0}
              max={2000}
              aira-labelledby="range-slider"
              color="info"
            />
          </div>

          {/* Pagination */}
          {productsPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={productsPerPage}
                totalItemsCount={productsCount}
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
