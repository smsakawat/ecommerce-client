import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import Loader from "../../layout/Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error, productCount } = useSelector(
    (state) => state.products
  );
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword));
  }, [dispatch, error, alert, keyword]);
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
        </>
      )}
    </>
  );
};

export default Products;
