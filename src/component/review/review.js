import React from "react"
import reviewStyles from "./review.module.scss"
import BuzzFeed from "../../assets/BuzzFeed-Logo.png"
import Delicious from "../../assets/Delicious_Logo_CS.png"
import FoodNetwork from "../../assets/food-network.png"
import FoodMagazine from "../../assets/food-magazine-logo.png"
import YelpBizzie from "../../assets/yelp-bizzie.png"
import YelpLoveUs from "../../assets/people-love-us.png"
const ReviewComponent = () => (
  <div className={reviewStyles.reviewContainer}>
    <div className={reviewStyles.featureContainer}>
      <img src={YelpBizzie} alt="Yelp Award" />
      <img src={YelpLoveUs} alt="Five Stars" />
    </div>
    <h1>Have been featured in:</h1>
    <div className={reviewStyles.featureContainer}>
      <img src={BuzzFeed} alt="BuzzFeed" />
      <img src={Delicious} alt="Delicious" />
      <img src={FoodNetwork} alt="Food Network" />
      <img src={FoodMagazine} alt="Food Magazine" />
    </div>
  </div>
)

export default ReviewComponent
