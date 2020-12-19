import React from "react"
import Layout from "../component/layout"
import swal from "sweetalert"
import reservePageStyle from "../styles/reserve.module.scss"
class ReservePage extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      date: "",
      time: "",
    }
  }
  handleChange = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    const { firstName, lastName, phoneNumber, date, time } = this.state

    if (firstName && lastName && phoneNumber && date && time) {
      swal("We've recieved your request", "We'll call you shortly", "success")
      this.setState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        date: "",
        time: "",
      })
      e.preventDefault()
    } else {
      swal("Please fill-in everything", "...", "error")
      e.preventDefault()
    }
  }

  render() {
    return (
      <Layout>
        <div className={reservePageStyle.reservePageContainer}>
          <form onSubmit={this.handleSubmit} method="post">
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              placeholder="Last Name"
            />
            <input
              type="tel"
              name="phoneNumber"
              onChange={this.handleChange}
              value={this.state.phoneNumber}
              placeholder="Contact No."
            />
            <input
              type="date"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
              placeholder="Date"
            />
            <input
              type="time"
              name="time"
              onChange={this.handleChange}
              value={this.state.time}
              placeholder="Time"
            />
            <input type="submit" name="submit" value="Confirm Reservation" />
          </form>
        </div>
      </Layout>
    )
  }
}

export default ReservePage
