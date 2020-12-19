import React from "react"
import foodHighlightStyle from "./food-highlight.module.scss"
const FoodHighlightComponent = () => (
  <div>
    <div className={foodHighlightStyle.foodHighlightContainer}>
      <h1>Highlight of the Week</h1>
      <div className={foodHighlightStyle.foodHighlightDescription}>
        <h2>PorChoppy Chop</h2>
        <p>This is our food hightlight</p>
      </div>
    </div>
    <hr />
  </div>
)

export default FoodHighlightComponent
