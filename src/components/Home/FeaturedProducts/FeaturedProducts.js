import React from "react";
import Product from "../../ui/Product/Product";
import "./FeaturedProducts.css";

const product = {
  name: "Dell Core i3",
  price: "$500",
  _id: "sakawat",
  images: [
    {
      url: "https://i.dell.com/das/xa.ashx/global-site-design%20WEB/11ed2ea3-e045-da4f-9232-efd641f6e2db/1/OriginalPng?id=Dell/Product_Images/Dell_Client_Products/Notebooks/Inspiron_Notebooks/Inspiron_14_5458/Non_Touch/global_spi/laptop-inspiron-14-5458-non-touch-black-generic-hero-504x350.psd",
    },
  ],
};
const FeaturedProducts = () => {
  return (
    <>
      <h1 className="featured_title">Featured Products</h1>
      <Product product={product} />
    </>
  );
};

export default FeaturedProducts;
