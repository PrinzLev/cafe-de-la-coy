import React from "react"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import carouselStyle from "./carousel.module.scss"
import firstSlideImg from "../../assets/first-slide-image.jpg"
import secondSlideImg from "../../assets/second-slide-image.jpg"
import thirdSlideImg from "../../assets/third-slide-image.jpg"

const CarouselComponent = () => (
  <div>
    <Carousel
      className={carouselStyle.carouselContainer}
      showThumbs={false}
      showStatus={false}
    >
      <div className={carouselStyle.carouselSlideContainer}>
        <div className={carouselStyle.slideDescription}>
          <h1>
            Open Hours:
          <br /> 11AM - 12MN
        </h1>
        </div>
        <img alt="restaurant" src={firstSlideImg} />
        <Link to="/reserve" className={carouselStyle.slideLink}>
          Reserve Now
      </Link>
      </div>
      <div className={carouselStyle.carouselSlideContainer}>
        <div className={carouselStyle.slideDescription}>
          <h2>Gourmet Dining</h2>
          <p>
            Check out our array food options to choose from. A selection of the
            highest grade meat, and miticulous crafted deserts
        </p>
        </div>
        <img alt="food" src={secondSlideImg} />
        <Link to="/menu/main" className={carouselStyle.slideLink}>
          Check Out Our Menu Here
      </Link>
      </div>
      <div className={carouselStyle.carouselSlideContainer}>
        <div className={carouselStyle.slideDescription}>
          <h2>Pastries Galour</h2>
          <p>
            Pasteries and coffee crafted by some of the best pastry chefs and
            baristas in the country.
        </p>
        </div>
        <img alt="coffee" src={thirdSlideImg} />
        <Link to="/menu/cafe" className={carouselStyle.slideLink}>
          Check Out Our Coffee and Pastries
      </Link>
      </div>
    </Carousel>
    <hr />
  </div>
)

export default CarouselComponent
