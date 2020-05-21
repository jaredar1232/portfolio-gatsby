import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  .section-footer {
    background-color: rgb(3, 3, 3);
    padding: 10rem 0 10rem 0;
    color: white;
  }

  .icon-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 40%;
    height: auto;
    margin: 0 auto;
  }

  .footer-icon {
    justify-self: center;
    width: 5.5rem;
    height: 5.5rem;
    border: solid 2px white;
    border-radius: 10px;
    text-align: center;
    color: white;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      border: solid 2px rgb(102, 201, 255);
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      -webkit-background-clip: text;
      color: transparent;
      box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.4);
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.2);
      transform: translateY(0);
    }
  }

  .anchor-tag {
    width: 100%;
  }

  .icon-link {
    width: 100%;
  }

  .fa {
    font-size: 4rem;
    padding-top: 0.6rem;
  }

  .u-center-text {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <section className="section-footer">
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/jared-rothenberg"
              className="footer-icon"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/jaredar1232"
              className="footer-icon"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
            <a href="mailto:jaredar@gmail.com" className="footer-icon">
              <i className="fa fa-envelope"></i>
            </a>
          </div>

          <div className="u-center-text">
            Copyright &copy; 2020, &nbsp; Jared Rothenberg. &nbsp; All Rights
            Reserved
          </div>
        </section>
      </FooterWrapper>
    );
  }
}
