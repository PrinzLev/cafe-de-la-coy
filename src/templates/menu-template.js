import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../component/layout"
import style from "../styles/menu.module.scss"
import Head from "../component/helmet"

const MenuTemplate = ({ title, fixed, price, info }) => {
  return (
    <Layout>
      <Head title="Menu Item" />
      <div className={style.singleTitle}>
        <h1> {title}</h1>
      </div>
      <section className={style.singleProduct}>
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <Link to="/menu">Back To Menu</Link>
        </article>
      </section>
      <div className={style.reserveLink}>
        <Link to="/reserve">Reserve Now</Link>
      </div>
    </Layout>
  )
}

export default MenuTemplate
