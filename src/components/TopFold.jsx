import React, { Component } from "react";
import styled from "styled-components";

const TopFoldWrapper = styled.div`
  .header {
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(14, 17, 25, 0.899),
        rgba(21, 26, 40, 0.194)
      ),
      url(https://jaredsportfolio.s3-us-west-1.amazonaws.com/LandingImageBlue.jpg);
    background-size: cover;
    background-position: right;
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 99%);
  }

  .header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 6rem;
    backface-visibility: hidden;
  }

  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3rem;

    animation: moveInTop 1.5s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;

    /* animation-iteration-count: 3; */
    /* animation-delay: 3s; */
  }

  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;

    animation: fadeIn 2.5s;
    animation-delay: 2.5s;
    animation-fill-mode: backwards;
  }

  @keyframes moveInTop {
    0% {
      opacity: 0;
      transform: translateY(-20rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes moveInButton {
    0% {
      opacity: 1;
      font-size: 0px;
      border-radius: 100px;
      background-color: transparent;
      color: black;
      border-color: transparent;
    }

    100% {
      opacity: 1;

      font-size: 1.6 rem;
      border-radius: 0;
      color: lightgrey;
      background-color: rgba(0, 0, 0, 0.3);
      border-color: darkgrey;
    }
  }

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 0rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: lightgrey;
    border: darkgrey solid 1px;
    -webkit-backface-visibility: hidden;
  }

  .btn:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.8);
    border: rgb(102, 201, 255) solid 1px;
    color: rgb(102, 201, 255);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.4);
    color: lightgrey;
    border: darkgrey solid 1px;
  }

  .btn--white {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.468);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 0rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: rgba(0, 0, 0, 0.5);
    color: transparent;
    border: lightgrey solid 1px;
  }

  .btn--white::after {
    background-color: rgba(0, 0, 0, 0.2);
    animation: moveInButton 1s;
    animation-fill-mode: backwards;
    animation-delay: 1.5s;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  .btn--animated {
    animation: moveInButton 1s;
    animation-fill-mode: backwards;
    animation-delay: 1.5s;
  }

  .bottom-border {
    clip-path: polygon(0 0, 100% 0, 100% 86vh, 0 100%);
    background-color: lightgrey;
    top: 0;
    height: 100vh;
  }
`;

export default class TopFold extends Component {
  render() {
    return (
      <TopFoldWrapper>
        <div className="bottom-border">
          <header className="header">
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Jared Rothenberg</span>
                <span className="heading-primary--sub">Software Engineer</span>
              </h1>
              <a href="#about-me" className="btn btn--white btn--animated">
                Explore
              </a>
            </div>
          </header>
        </div>
      </TopFoldWrapper>
    );
  }
}
