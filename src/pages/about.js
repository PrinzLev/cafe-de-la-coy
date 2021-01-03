import React from "react"
import Layout from "../component/layout"
import aboutStyle from "../styles/about.module.scss"
import Image from "gatsby-image"
import { graphql } from "gatsby"

export const data = graphql`
  {
    headchef: file(relativePath: { eq: "about-page/headchef.png" }) {
      childImageSharp {
        fixed(height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pastrychef: file(relativePath: { eq: "about-page/pastry-chef.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bartender: file(relativePath: { eq: "about-page/bartender.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    manager: file(relativePath: { eq: "about-page/manager.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    team: file(relativePath: { eq: "about-page/more-workers.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const AboutPage = ({ data }) => {
  return (
    <Layout>
      <h1 className={aboutStyle.pageTitle}>Meet Our Team</h1>
      <div className={aboutStyle.flexSection}>
        <Image
          className={aboutStyle.img}
          fixed={data.headchef.childImageSharp.fixed}
        />
        <div className={aboutStyle.memberSection}>
          <h2>Sven Jorgensen</h2>
          <h4>Headchef</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            laoreet sit amet cursus. Lectus urna duis convallis convallis tellus
            id interdum. Ultricies mi quis hendrerit dolor magna eget est.
            Rutrum quisque non tellus orci ac auctor augue mauris augue. Nulla
            facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum. Magna fringilla urna porttitor rhoncus dolor purus non
            enim. Tincidunt dui ut ornare lectus sit amet est placerat. Tellus
            in metus vulputate eu scelerisque felis. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper eget. Malesuada fames ac
            turpis egestas sed tempus urna et. Donec adipiscing tristique risus
            nec feugiat in fermentum posuere urna. Nam at lectus urna duis
            convallis convallis tellus. Libero volutpat sed cras ornare. Non
            curabitur gravida arcu ac tortor. Malesuada nunc vel risus commodo
            viverra.
          </p>
        </div>
      </div>
      <hr />
      <div className={aboutStyle.flexSection}>
        <div className={aboutStyle.memberSection}>
          <h2>Japrit Singh</h2>
          <h4>Pastry / Desert Chef</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            laoreet sit amet cursus. Lectus urna duis convallis convallis tellus
            id interdum. Ultricies mi quis hendrerit dolor magna eget est.
            Rutrum quisque non tellus orci ac auctor augue mauris augue. Nulla
            facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum. Magna fringilla urna porttitor rhoncus dolor purus non
            enim. Tincidunt dui ut ornare lectus sit amet est placerat. Tellus
            in metus vulputate eu scelerisque felis. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper eget. Malesuada fames ac
            turpis egestas sed tempus urna et. Donec adipiscing tristique risus
            nec feugiat in fermentum posuere urna. Nam at lectus urna duis
            convallis convallis tellus. Libero volutpat sed cras ornare. Non
            curabitur gravida arcu ac tortor. Malesuada nunc vel risus commodo
            viverra.
          </p>
        </div>
        <Image
          className={aboutStyle.img}
          fixed={data.pastrychef.childImageSharp.fixed}
        />
      </div>
      <hr />
      <div className={aboutStyle.flexSection}>
        <Image
          className={aboutStyle.img}
          fixed={data.bartender.childImageSharp.fixed}
        />
        <div className={aboutStyle.memberSection}>
          <h2>Tony Abanony</h2>
          <h4>Bartender</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            laoreet sit amet cursus. Lectus urna duis convallis convallis tellus
            id interdum. Ultricies mi quis hendrerit dolor magna eget est.
            Rutrum quisque non tellus orci ac auctor augue mauris augue. Nulla
            facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum. Magna fringilla urna porttitor rhoncus dolor purus non
            enim. Tincidunt dui ut ornare lectus sit amet est placerat. Tellus
            in metus vulputate eu scelerisque felis. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper eget. Malesuada fames ac
            turpis egestas sed tempus urna et. Donec adipiscing tristique risus
            nec feugiat in fermentum posuere urna. Nam at lectus urna duis
            convallis convallis tellus. Libero volutpat sed cras ornare. Non
            curabitur gravida arcu ac tortor. Malesuada nunc vel risus commodo
            viverra.
          </p>
        </div>
      </div>
      <hr />
      <div className={aboutStyle.flexSection}>
        <div className={aboutStyle.memberSection}>
          <h2>Bill Gates</h2>
          <h4>Owner / Manager</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            laoreet sit amet cursus. Lectus urna duis convallis convallis tellus
            id interdum. Ultricies mi quis hendrerit dolor magna eget est.
            Rutrum quisque non tellus orci ac auctor augue mauris augue. Nulla
            facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum. Magna fringilla urna porttitor rhoncus dolor purus non
            enim. Tincidunt dui ut ornare lectus sit amet est placerat. Tellus
            in metus vulputate eu scelerisque felis. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper eget. Malesuada fames ac
            turpis egestas sed tempus urna et. Donec adipiscing tristique risus
            nec feugiat in fermentum posuere urna. Nam at lectus urna duis
            convallis convallis tellus. Libero volutpat sed cras ornare. Non
            curabitur gravida arcu ac tortor. Malesuada nunc vel risus commodo
            viverra.
          </p>
        </div>
        <Image
          className={aboutStyle.img}
          fixed={data.manager.childImageSharp.fixed}
        />
      </div>
      <hr />
      <div className={aboutStyle.flexSection}>
        <Image
          className={aboutStyle.img}
          fixed={data.team.childImageSharp.fixed}
        />
        <div className={aboutStyle.memberSection}>
          <h2>Behind Our Succes</h2>
          <h4>Our Team</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            laoreet sit amet cursus. Lectus urna duis convallis convallis tellus
            id interdum. Ultricies mi quis hendrerit dolor magna eget est.
            Rutrum quisque non tellus orci ac auctor augue mauris augue. Nulla
            facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum. Magna fringilla urna porttitor rhoncus dolor purus non
            enim. Tincidunt dui ut ornare lectus sit amet est placerat. Tellus
            in metus vulputate eu scelerisque felis. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper eget. Malesuada fames ac
            turpis egestas sed tempus urna et. Donec adipiscing tristique risus
            nec feugiat in fermentum posuere urna. Nam at lectus urna duis
            convallis convallis tellus. Libero volutpat sed cras ornare. Non
            curabitur gravida arcu ac tortor. Malesuada nunc vel risus commodo
            viverra.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
