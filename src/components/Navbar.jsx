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

  @keyframes navButtonBackgroundAppearMobile {
    0% {
      opacity: 0;
      border-radius: 100px;
      height: 0;
      width: 0;
    }

    100% {
      opacity: 1;
      border-radius: 5rem;
      height: 5rem;
      width: 5rem;
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
      animation-delay: 5.5s;

      transition: all 0.4s;

      :hover {
        transform: scale(1.1);
      }

      @media (max-width: 56.25em) {
        animation: navButtonBackgroundAppearMobile 1s;
        animation-delay: 3s;
        animation-fill-mode: backwards;
        height: 5rem; // -2
        width: 5rem; // -2
        top: 3rem;
        right: 3rem;
      }
    }

    &__background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient(rgb(94, 183, 231), rgb(114, 132, 233));
      z-index: 100;
      transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1);

      animation: navButtonBackgroundAppear 0s;
      animation-fill-mode: backwards;
      animation-delay: 6.5s;

      @media (max-width: 56.25em) {
        height: 4rem; // -2
        width: 4rem; // -2
        top: 3.5rem;
        right: 3.5rem;
        animation-delay: 4s;
      }
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

      @media (max-width: 56.25em) {
        z-index: -150;
      }
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

      @media (max-width: 56.25em) {
        margin-top: 2.5rem;
      }

      &,
      &::before,
      &::after {
        width: 3rem;
        height: 2px;
        background-color: white;
        display: inline-block;
        @media (max-width: 56.25em) {
          width: 2.5rem;
        }
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

  .navigation__checkbox:checked ~ .navigation__nav {
    @media (max-width: 56.25em) {
      z-index: 150;
    }
  }
`

export default class Navbar extends Component {
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
