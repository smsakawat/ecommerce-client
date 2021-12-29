import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearErrors,
  getProductDetails,
} from "../../../redux/actions/productAction";

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
  return (
    <>
      <div className="productDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((imgItem, index) => (
                <>
                  <img
                    src={imgItem.url}
                    alt={`${index} Slide`}
                    className="carouselImage"
                  />
                </>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
