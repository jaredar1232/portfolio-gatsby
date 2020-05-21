import React, { Component } from "react";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  .section-about {
    background-color: #181e2e;
    padding: 40rem 0 100rem 0;
    color: white;
    margin-top: -20vh;
    z-index: 7;
  }

  .u-center-text {
    text-align: center;
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

  .heading-tertiary {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .paragraph {
    font-size: 1.6rem;
    &:not(:first-child) {
      margin-bottom: 3rem;
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
    }
  }

  .writing {
    margin-right: 6rem;
    margin-top: 3rem;
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
    }
  }
`;

export default class AboutMe extends Component {
  render() {
    return (
      <AboutMeWrapper>
        <main>
          <section className="section-about" id="about-me">
            <div className="u-center-text">
              <h2 className="heading-secondary">About Me</h2>
            </div>
            <div className="row">
              <div className="col-1-of-2 writing">
                <h3 className="heading-tertiary">Some Stuff About me Title</h3>
                <p className="paragraph">
                  I enjoy building beautiful software; intuitive for clients to
                  interact with and refreshing for developers to read. I have
                  experience solving problems with a wide variety of
                  technologies and love adding new ones to my tool kit.
                </p>
                <h3 className="heading-tertiary">
                  Some More Stuff About me Title
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, quas reprehenderit. Eius excepturi fuga facere magnam
                  aperiam laboriosam adipisci odit tempore odio saepe nesciunt,
                  accusamus consectetur tempora quibusdam aliquid quaerat.
                </p>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Headshot.JPG"
                    alt="Photo 1"
                    className="composition__photo"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </AboutMeWrapper>
    );
  }
}
