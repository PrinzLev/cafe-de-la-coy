import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import carouselStyle from "./carousel.module.scss"
import Image from "gatsby-image"

const getImages = graphql`
  {
    first: file(
      relativePath: { eq: "homepage-carousel/first-slide-image.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    second: file(
      relativePath: { eq: "homepage-carousel/second-slide-image.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    third: file(
      relativePath: { eq: "homepage-carousel/third-slide-image.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const CarouselComponent = () => {
  const data = useStaticQuery(getImages)
  return (
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
          <Image fluid={data.first.childImageSharp.fluid} />
          <Link to="/reserve" className={carouselStyle.slideLink}>
            Reserve Now
          </Link>
        </div>
        <div className={carouselStyle.carouselSlideContainer}>
          <div className={carouselStyle.slideDescription}>
            <h2>Gourmet Dining</h2>
            <p>
              Check out our array food options to choose from. A selection of
              the highest grade meat, and miticulous crafted deserts
            </p>
          </div>
          <Image fluid={data.second.childImageSharp.fluid} />
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
          <Image fluid={data.third.childImageSharp.fluid} />
          <Link to="/menu/cafe" className={carouselStyle.slideLink}>
            Check Out Our Coffee and Pastries
          </Link>
        </div>
      </Carousel>
      <hr />
    </div>
  )
}

export default CarouselComponent
