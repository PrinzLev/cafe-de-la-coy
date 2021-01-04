import React from "react"
import { graphql } from "gatsby"
import MenuTemplate from "./menu-template"
import Layout from "../component/layout"

const CafeMenuTemplate = ({
  data: {
    CafeMenu: {
      image: { fixed },
      price,
      title,
      info: { info },
    },
  },
}) => (
  <Layout>
    <MenuTemplate fixed={fixed} price={price} title={title} info={info} />
  </Layout>
)

export const query = graphql`
  query GetSingleCafeMenuItem($slug: String) {
    CafeMenu: contentfulCafeMenu(slug: { eq: $slug }) {
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
export default CafeMenuTemplate
