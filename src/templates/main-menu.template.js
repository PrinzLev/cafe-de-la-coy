import React from "react"
import { graphql } from "gatsby"
import MenuTemplate from "./menu-template"

const MainMenuTemplate = ({
  data: {
    MainMenu: {
      image: { fixed },
      price,
      title,
      info: { info },
    },
  },
}) => (
  <>
    <MenuTemplate fixed={fixed} price={price} title={title} info={info} />
  </>
)

export const query = graphql`
  query GetSingleMainMenuItem($slug: String) {
    MainMenu: contentfulMainMenu(slug: { eq: $slug }) {
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      price
      title
      info {
        info
      }
    }
  }
`
export default MainMenuTemplate
