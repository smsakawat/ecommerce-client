import { Rating } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const options = {
    value: 3,
    readOnly: true,
    precision: 0.5,
    size: "small",
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />
        <span className="productCardSpan"> (40 Reviews)</span>
      </div>
      <span>{product.price}</span>
    </Link>
  );
};

export default ProductCard;
