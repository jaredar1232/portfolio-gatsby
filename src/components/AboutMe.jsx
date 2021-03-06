import React, { Component } from "react"
import styled from "styled-components"

const AboutMeWrapper = styled.div`
  .section-about {
    background-color: #181e2e;
    padding: 30rem 0 125rem 0;
    color: white;
    margin-top: -20vh;
    z-index: 7;

    @media (max-width: 56.25em) {
      padding: 20rem 0 110rem 0;
    }
  }

  .u-center-text {
    text-align: center;
  }

  .heading-secondary {
    font-size: 5.5rem;
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

    @media (max-width: 56.25em) {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  }

  .heading-tertiary {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .paragraph {
    font-size: 2.5rem;
    &:not(:first-child) {
      margin-bottom: 3rem;
    }
    @media (max-width: 56.25em) {
      font-size: 1.6rem;
      margin: 0 1rem;
    }
  }

  .row {
    max-width: 114rem;
    background-color: #eee;
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 8rem;
    }

    .clearfix {
      &::after {
        content: "";
        display: table;
        clear: both;
      }
    }

    .col-1-of-2 {
      width: calc((100% - 6rem) / 2);
      float: right;

      @media (max-width: 56.25em) {
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
      }
    }
  }

  .writing {
    margin-right: 6rem;
    margin-top: 3rem;

    @media (max-width: 56.25em) {
      margin-right: 3rem;
      margin-top: 0rem;
    }
  }

  .composition {
    position: relative;
    &__photo {
      width: 70%;
      box-shadow: 0 1.5rem 4rem black;
      border-radius: 5px;
      position: absolute;
      left: 9rem;
      top: 4rem;

      @media (max-width: 56.25em) {
        margin-top: 2rem;
      }

      @media (max-width: 56.25em) {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 0rem;
        width: 25rem;
      }
    }
  }
`

export default class AboutMe extends Component {
  render() {
    return (
      <AboutMeWrapper>
        <main>
          <section className="section-about">
            <div className="u-center-text">
              <h2 className="heading-secondary" id="about-me">
                About Me
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2 writing">
                <p
                  className="paragraph"
                  data-sal="slide-left"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  Hello and welcome to my portfolio! After graduating with a
                  STEM background from the University of California Santa
                  Barbara, I found my true passion in coding. I learned the
                  ropes and drilled the fundamentals on my own before deciding
                  to attend one of the top software engineering immersives in
                  the world and further refine my abilities.
                  <br />
                  <br />I enjoy building beautiful software; intuitive for
                  clients to interact with and refreshing for developers to
                  read. I have experience solving problems with a wide variety
                  of technologies and love adding to my tool kit. I'm really
                  interested in tech, medicine, health & fitness, and finance
                  because these are all fields which push personal and societal
                  growth.
                </p>
              </div>
              <div className="col-1-of-2">
                <div
                  className="composition"
                  data-sal="zoom-in"
                  data-sal-delay="400"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  <img
                    src="https://d1o11p1jeyf1dw.cloudfront.net/Headshot.JPG"
                    alt="Photo 1"
                    className="composition__photo"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </AboutMeWrapper>
    )
  }
}
