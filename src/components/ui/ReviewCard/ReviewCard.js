import { Rating } from "@material-ui/lab";
import React from "react";
import profileImg from "../../../images/Profile.png";
import "./ReviewCard.css";
const ReviewCard = ({ review }) => {
  //   Rating options
  const options = {
    size: window.innerWidth > 650 ? "large" : "medium",
    value: 3,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="reviewCard">
      <img src={profileImg} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
