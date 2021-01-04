import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getTitle = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Head = ({ title }) => {
  const data = useStaticQuery(getTitle)
  const {
    site: {
      siteMetadata: { siteTitle },
    },
  } = data
  return <Helmet title={`${title} | ${siteTitle}`} />
}

export default Head
