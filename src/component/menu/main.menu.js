import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Style from "../../styles/menu.module.scss"

const query = graphql`
  {
    allContentfulMainMenu {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
          title
        }
        price
        title
        slug
        id
      }
    }
  }
`
const MainMenu = ({ preview }) => {
  const {
    allContentfulMainMenu: { nodes },
  } = useStaticQuery(query)

  return (
    <section className={Style.page}>
      {nodes
        .filter((item, index) => index < (preview ? 6 : 8))
        .map(({ image: { fluid }, title, slug, price, id }) => {
          return (
            <article key={id}>
              <Image fluid={fluid}></Image>
              <h3>
                {" "}
                {title} <span>${price}</span>
              </h3>
              <Link to={`/menu/${slug}`}>more details</Link>
            </article>
          )
        })}
    </section>
  )
}

export default MainMenu
