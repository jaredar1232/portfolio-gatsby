import React, { Component } from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  .section-contact {
    background-color: #181e2e;
    padding: 10rem 0 10rem 0;
    color: white;
    border-top: solid 3px yellow;
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
`;

export default class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <section className="section-contact">
          <div className="u-center-text">
            <h2 className="heading-secondary">Lets Work Together!</h2>
          </div>
        </section>
      </ContactWrapper>
    );
  }
}
