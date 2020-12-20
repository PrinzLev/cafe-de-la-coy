import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout
