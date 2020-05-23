import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

const ContactWrapper = styled.div`
  .section-contact {
    background-color: #181e2e;
    padding: 0 0 5rem 0;
    color: white;
  }

  .heading-secondary {
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 3rem;
  }

  .u-center-text {
    text-align: center;
  }

  .form-container {
    border-radius: 5px;
    background-color: #181e2e;
    padding: 20px;
    margin: 0 auto;
    color: white;
    font-size: 1.5rem;
    max-width: 55rem;
  }

  .form-text {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    font-family: "Lato", sans-serif;
  }

  .form-textarea {
    height: 15rem;
  }

  .center-submit {
    text-align: center;
  }

  .form-submit {
    width: 20%;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    color: white;
    padding: 1.5rem 1.5rem;
    margin: 1rem 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.5rem;
    min-width: 8rem;
    transition: all 0.4s;

    &:hover {
      background-image: linear-gradient(
        to right bottom,
        rgb(68, 120, 148),
        rgb(86, 99, 175)
      );
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
      transform: translateY(-2px);
      border-radius: 4px;
    }

    &:active {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      transform: translateY(0);
    }
  }
`

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    alert("Message submitted")
    event.preventDefault()

    axios
      .post(
        "https://jared-rothenberg-portfolio-ser.herokuapp.com/",
        {
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <ContactWrapper>
        <section className="section-contact">
          <div className="u-center-text">
            <h2 className="heading-secondary">Lets Work Together!</h2>
          </div>

          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-text"
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-text"
                />
              </label>
              <label>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-text"
                />
              </label>
              <label>
                Message:
                <textarea
                  type="text"
                  name="message"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  className="form-text form-textarea"
                />
              </label>
              <div className="center-submit">
                <input type="submit" value="Submit" className="form-submit" />
              </div>
            </form>
          </div>
        </section>
      </ContactWrapper>
    )
  }
}
