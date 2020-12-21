import React from "react"
import footerStyle from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyle.footerContainer}>
    <span>
      Ground Floor, B6, Bonifacio High Street,
      <br /> Taguig, Metro Manila
    </span>
    <span>Jericho Irivin © {new Date().getFullYear()}</span>
  </footer>
)

export default Footer
