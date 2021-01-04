import React from "react"
import Layout from "../../component/layout"
import Style from "../../styles/menu.module.scss"
import MainMenu from "../../component/menu/main.menu"
import { Link } from "gatsby"
import Head from "../../component/helmet"

const MainMenuPage = () => {
  return (
    <Layout>
      <Head title="Primary Menu" />
      <h1 className={Style.title}>Primary Courses</h1>
      <MainMenu />
      <div className={Style.reserveLink}>
        <Link to="/reserve">Reserve Now</Link>
      </div>
    </Layout>
  )
}

export default MainMenuPage
