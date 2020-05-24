import React, { Component } from "react"
import styled from "styled-components"

const NavbarWrapper = styled.div`
  @keyframes navButtonAppear {
    0% {
      opacity: 0;
      border-radius: 100px;
      height: 0;
      width: 0;
    }

    100% {
      opacity: 1;
      border-radius: 5rem;
      height: 7rem;
      width: 7rem;
    }
  }

  @keyframes navButtonBackgroundAppear {
    0% {
      opacity: 0;
      border-radius: 100px;
      height: 0;
      width: 0;
    }

    100% {
      opacity: 1;
      border-radius: 5rem;
      height: 7rem;
      width: 7rem;
    }
  }

  .navigation {
    &__checkbox {
      display: none;
    }

    &__button {
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      height: 7rem;
      width: 7rem;
      border-radius: 50%;
      position: fixed;
      top: 6rem;
      right: 6rem;
      z-index: 200;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
      text-align: center;
      cursor: pointer;

      animation: navButtonAppear 1s;
      animation-fill-mode: backwards;
      animation-delay: 10s;

      transition: all 0.4s;

      :hover {
        transform: scale(1.1);
      }
    }

    &__background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient(rgb(102, 201, 255), rgb(120, 139, 249));
      z-index: 100;
      transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1);

      animation: navButtonBackgroundAppear 0s;
      animation-fill-mode: backwards;
      animation-delay: 11s;
    }

    &__nav {
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 150;

      opacity: 0;
      width: 0;
      transition: all 0.8s;
    }

    &__list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
      width: 100%;
    }

    &__item {
      margin: 1rem;
    }

    &__link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        background-image: linear-gradient(
          140deg,
          transparent 0%,
          transparent 50%,
          white 50%
        );
        background-size: 250%;
        transition: all 0.4s;
        border-radius: 4px;
      }
      &:hover,
      &:active {
        background-position: 100%;
        color: rgb(102, 201, 255);
        transform: translateX(1rem);
      }
    }

    //NAVIGATION ICON
    &__icon {
      position: relative;
      margin-top: 3.5rem;

      &,
      &::before,
      &::after {
        width: 3rem;
        height: 2px;
        background-color: white;
        display: inline-block;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
      }

      &::before {
        top: -0.8rem;
      }
      &::after {
        top: 0.8rem;
      }
    }
  }

  //   .navigation__button:hover .navigation__icon::before {
  //     top: -1rem;
  //   }

  //   .navigation__button:hover .navigation__icon::after {
  //     top: 1rem;
  //   }

  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(140);
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    width: 100%;
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;

    &::before {
      transform: rotate(135deg);
      top: 0rem;
      background-color: rgb(102, 201, 255);
    }

    &::after {
      transform: rotate(-135deg);
      top: -0rem;
      background-color: rgb(102, 201, 255);
    }
  }

  .navigation__checkbox:checked ~ .navigation__button {
    background-image: linear-gradient(
      to right bottom,
      rgb(255, 255, 255),
      rgb(255, 255, 255)
    );
  }
`

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onClickHandler() {
    document.getElementById("navi-toggle").click()
  }

  render() {
    return (
      <NavbarWrapper>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          ></input>

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li
                className="navigation__item"
                onClick={() => this.onClickHandler()}
              >
                <a href="#about-me" className="navigation__link">
                  About Me
                </a>
              </li>
              <li
                className="navigation__item"
                onClick={() => this.onClickHandler()}
              >
                <a href="#applications" className="navigation__link">
                  Applications
                </a>
              </li>
              <li
                className="navigation__item"
                onClick={() => this.onClickHandler()}
              >
                <a href="#resume" className="navigation__link">
                  Resume
                </a>
              </li>
              <li
                className="navigation__item"
                onClick={() => this.onClickHandler()}
              >
                <a href="#contact-me" className="navigation__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </NavbarWrapper>
    )
  }
}
