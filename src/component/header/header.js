import React from "react"
import Logo from "../../assets/cafe-de-la-coy logo.png"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.headerContainer}>
      <Link to="/">
        <h1 className={headerStyles.siteTitle}>
          {data.site.siteMetadata.title}
        </h1>
      </Link>
      <img className={headerStyles.headerLogo} alt="logo" src={Logo} />

      <div className={headerStyles.headerOptions}>
        <Link className={headerStyles.headerOption} to="/">
          Home
        </Link>
        <Link className={headerStyles.headerOption} to="/menu">
          Menu
        </Link>
        <Link className={headerStyles.headerOption} to="/about">
          Our Team
        </Link>
        <Link className={headerStyles.headerOption} to="/reserve">
          Reserve Now
        </Link>
      </div>
    </div>
  )
}

export default Header
