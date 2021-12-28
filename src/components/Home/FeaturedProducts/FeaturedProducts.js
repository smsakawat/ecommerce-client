import React from "react";
import ProductCard from "../../ui/ProductCard/ProductCard";
import "./FeaturedProducts.css";

const product = {
  name: "Airpods Blutooth Wireless Headphone",
  price: "$500",
  _id: "sakawat",
  images: [
    {
      url: "http://ecommerce0799.herokuapp.com/images/airpods.jpg",
    },
  ],
};
const FeaturedProducts = () => {
  return (
    <>
      <section id="featuredSection">
        <h1 className="featured_title">Featured Products</h1>
        <div className="fearutedContainer">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
