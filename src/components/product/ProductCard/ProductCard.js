import { Rating } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, images, ratings, numOfReviews, price } = product;
  const options = {
    value: ratings,
    readOnly: true,
    precision: 0.5,
    size: "small",
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={images[0].url} alt={name} />
      <p>{name}</p>
      <div>
        <Rating {...options} />
        <span className="productCardSpan">{`(${numOfReviews} Reviews)`}</span>
      </div>
      <span>{`$${price}`}</span>
    </Link>
  );
};

export default ProductCard;
