import React from "react"
import Layout from "../../component/layout"
import Style from "../../styles/menu.module.scss"
import CafeMenu from "../../component/menu/cafe.menu"
import { Link } from "gatsby"

const CafeMenuPage = () => {
  return (
    <Layout>
      <h1 className={Style.title}>Cafe Menu</h1>
      <CafeMenu />
      <div className={Style.reserveLink}>
        <Link to="/reserve">Reserve Now</Link>
      </div>
    </Layout>
  )
}

export default CafeMenuPage
