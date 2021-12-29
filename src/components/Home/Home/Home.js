import React from "react";
import MetaData from "../../layout/MetaData/MetaData";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <>
      <MetaData title="ECOMMERCE" />
      <Banner />
      <FeaturedProducts />
    </>
  );
};

export default Home;
