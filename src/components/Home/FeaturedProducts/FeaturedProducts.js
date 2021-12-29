import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import Loader from "../../layout/Loader/Loader";
import ProductCard from "../../ui/ProductCard/ProductCard";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  // load products
  useEffect(() => {
    // Showing alert if any errors happen while loading products
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section id="featuredSection">
          <h1 className="featured_title">Featured Products</h1>
          <div className="fearutedContainer">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default FeaturedProducts;
