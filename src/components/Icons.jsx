import React, { Component } from "react"
import styled from "styled-components"

const IconsWrapper = styled.div`
  display: inline-block;
  margin: 1rem 2rem;
  text-align: center;

  .icon-container {
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    border-radius: 5px;
    margin: 0 auto;
  }

  .icon-image {
    height: auto%;
    width: 100%;
  }

  .icon-label {
    font-weight: 400;
    font-size: 2rem;
    color: black;
  }
`

export default class Icons extends Component {
  render() {
    return (
      <IconsWrapper>
        <div className="icon-container">
          <img className="icon-image" src={`/${this.props.anIcon}.png`}></img>
        </div>
        <div className="icon-label">{this.props.anIcon}</div>
      </IconsWrapper>
    )
  }
}
