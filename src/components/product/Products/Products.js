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
    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, error, alert, keyword, currentPage]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products.length &&
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
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
        </>
      )}
    </>
  );
};

export default Products;
