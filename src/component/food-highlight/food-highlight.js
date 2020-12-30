import React from "react"
import { Link } from "gatsby"
import lambchop from "../../assets/lambchop.png"
import foodHighlightStyle from "./food-highlight.module.scss"

const FoodHighlightComponent = () => (
  <div>
    <div className={foodHighlightStyle.foodHighlightContainer}>
      <h1>Highlight of the Week</h1>
      <div className={foodHighlightStyle.flexContainer}>
        <div className={foodHighlightStyle.foodHighlightDescription}>
          <h2>Lambchop With Mixed Vegtables</h2>
          <p>
            This is our lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img src={lambchop} alt="lambchop" />
      </div>
      <Link to="/menu">Check the Rest of our Menu Here</Link>
    </div>
    <hr />
  </div>
)

export default FoodHighlightComponent
