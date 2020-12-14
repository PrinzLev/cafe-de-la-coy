import React from "react"
import reviewStyles from "./review.module.scss"
import YelpStars from "../../assets/yelp-stars.png"
const ReviewComponent = () => (
  <div className={reviewStyles.reviewContainer}>
    <h1>4.9/5 Stars in Yelp</h1>
    <img alt="Yelp Stars" src={YelpStars} />
    <p>
      Highlighted Review: <br />
      "The quality of food was superb, only slightly outmatched by the quality
      of service they provided, not only to me but to everyone else" <br />
      -Amster Dam
    </p>
  </div>
)

export default ReviewComponent
