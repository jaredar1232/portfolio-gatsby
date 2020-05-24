import React, { Component } from "react"
import styled from "styled-components"

const ResumeWrapper = styled.div`
  .section-resume {
    background-color: #181e2e;
    padding: 40rem 0 10rem 0;
    color: white;
    margin-top: -20vh;
  }

  .u-center-text {
    text-align: center;
  }

  .iframe-container {
    overflow: hidden;
    padding-top: 67%;
    position: relative;
    width: 50%;
    height: 100%;
    margin: auto;
  }

  .iframe {
    border: none;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`
// .iframe-container-4x3 {
//   padding-top: 75%;
// }

export default class Resume extends Component {
  render() {
    return (
      <ResumeWrapper>
        <section className="section-resume">
          <div className="iframe-container">
            <iframe
              src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Resume.pdf"
              className="iframe"
            ></iframe>
          </div>
        </section>
      </ResumeWrapper>
    )
  }
}
