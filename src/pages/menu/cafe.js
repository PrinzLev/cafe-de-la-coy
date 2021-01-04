import React from "react"
import Layout from "../../component/layout"
import Style from "../../styles/menu.module.scss"
import CafeMenu from "../../component/menu/cafe.menu"
import { Link } from "gatsby"
import Head from "../../component/helmet"

const CafeMenuPage = () => {
  return (
    <Layout>
      <Head title="Cafe Menu" />
      <h1 className={Style.title}>Cafe Menu</h1>
      <hr />
      <CafeMenu />
      <div className={Style.reserveLink}>
        <Link to="/reserve">Reserve Now</Link>
      </div>
    </Layout>
  )
}

export default CafeMenuPage
