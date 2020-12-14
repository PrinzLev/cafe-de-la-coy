import React from "react"
import Layout from "../component/layout"
import CarouselComponent from "../component/carousel/carousel"
import ReviewComponent from "../component/review/review"
import "../styles/index.scss"
const Home = () => (
  <Layout>
    <div>
      <CarouselComponent />
      <ReviewComponent />
    </div>
  </Layout>
)

export default Home
