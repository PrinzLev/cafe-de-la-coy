import React from "react"
import Layout from "../component/layout"
import CarouselComponent from "../component/carousel/carousel"
import ReviewComponent from "../component/review/review"
import FoodHighlightComponent from "../component/food-highlight/food-highlight"
import "../styles/index.scss"
import Head from "../component/helmet"

const Home = () => (
  <Layout>
    <Head title="Home" />
    <CarouselComponent />
    <FoodHighlightComponent />
    <ReviewComponent />
  </Layout>
)

export default Home
