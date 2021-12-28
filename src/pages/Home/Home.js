import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import FeaturedProducts from "../../components/Home/FeaturedProducts/FeaturedProducts";
import MetaData from "../../components/layout/MetaData/MetaData";

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
