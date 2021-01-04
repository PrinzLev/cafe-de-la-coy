import React from "react"
import Layout from "../component/layout"
import { Link } from "gatsby"
import Style from "../styles/menu.module.scss"
import CafeMenu from "../component/menu/cafe.menu"
import MainMenu from "../component/menu/main.menu"
import Head from "../component/helmet"

const MenuPage = () => {
  return (
    <Layout>
      <Head title="Menu" />
      <h1 className={Style.title}>Menu</h1>
      <Link className={Style.subTitle} to="/menu/main">
        <h1>Primary Course</h1>
      </Link>
      <MainMenu />
      <Link className={Style.subTitle} to="/menu/cafe">
        <h1>Cafe Menu</h1>
      </Link>
      <CafeMenu />
      <div className={Style.reserveLink}>
        <Link to="/reserve">Reserve Now</Link>
      </div>
    </Layout>
  )
}

export default MenuPage
