import React from "react"
import Layout from "../component/layout"
import swal from "sweetalert"

const ReservePage = () => {
  const onSubmit = e => {
    swal("We've recieved your request", "We'll call you shortly", "success")
    e.preventDefault()
  }
  return (
    <Layout>
      <form onSubmit={onSubmit} method="post">
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="submit" name="submit" value="Confirm Reservation" />
      </form>
    </Layout>
  )
}

export default ReservePage
