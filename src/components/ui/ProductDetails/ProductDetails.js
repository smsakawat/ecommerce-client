import { Rating } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearErrors,
  getProductDetails,
} from "../../../redux/actions/productAction";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, []);

  //   Rating options
  const options = {
    size: "large",
    value: 3,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <div className="productDetails">
        <div>
          {product.images &&
            product.images.map((imgItem, index) => (
              <img
                key={index}
                src={imgItem.url}
                alt={`${index} Slide`}
                className="carouselImage"
              />
            ))}
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <Rating {...options} />
            <span className="detailsBlock-2-span">
              {" "}
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`$${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input readOnly type="number" value={5} />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="detailsBlock-4">
            Description : <p>{product.description}</p>
          </div>

          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
