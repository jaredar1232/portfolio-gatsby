import React, { Component } from "react"
import styled from "styled-components"

const ResumeWrapper = styled.div`
  .section-resume {
    background-color: #181e2e;
    padding: 40rem 0 10rem 0;
    color: white;
    margin-top: -20vh;
    @media (max-width: 56.25em) {
      padding: 25rem 0 5rem 0;
    }
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

    @media (max-width: 56.25em) {
      width: 80%;
      padding-top: 115%;
    }

    // position: relative;
    // padding-bottom: 56.25%; /* 16:9 */
    // padding-top: 25px;
    // height: 0;
  }

  .iframe {
    border: none;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    // @media (max-width: 56.25em) {
    // }

    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
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
          <div className="iframe-container" id="resume">
            <iframe
              src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Resume.pdf"
              className="iframe"
              type="application/pdf"
            ></iframe>
          </div>
        </section>
      </ResumeWrapper>
    )
  }
}
