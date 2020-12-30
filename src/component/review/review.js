import React from "react"
import reviewStyles from "./review.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    nonyelp: allFile(filter: { relativeDirectory: { eq: "reviews-section" } }) {
      nodes {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    yelp: allFile(filter: { relativeDirectory: { eq: "yelp-awards" } }) {
      nodes {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
const ReviewComponent = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={reviewStyles.reviewContainer}>
      <div className={reviewStyles.featureContainer}>
        {data.yelp.nodes.map(({ childImageSharp: { fixed } }) => (
          <div className={reviewStyles.img}>
            <Image fixed={fixed} />
          </div>
        ))}
      </div>
      <h1>Have been featured in:</h1>
      <div className={reviewStyles.featureContainer}>
        {data.nonyelp.nodes.map(({ childImageSharp: { fixed } }) => (
          <div className={reviewStyles.img}>
            <Image fixed={fixed} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewComponent
