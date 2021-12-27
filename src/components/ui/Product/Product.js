import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};
const Product = ({ product }) => {
  const { name, images, _id, price } = product;
  return (
    <>
      <Link className="product_card" to={`/${_id}`}>
        <img src={images[0].url} alt={name} />
        <p>{name}</p>
        <div>
          <ReactStars {...options} />
        </div>
        <span>{price}</span>
      </Link>
    </>
  );
};

export default Product;
