import React, { Component } from "react"
import styled from "styled-components"

const ModalWrapper = styled.div`
  .hide-modal {
    display: none;
  }

  .popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;

    &__content {
      width: 70%;
      height: 90%;
      background-color: white;
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;

      @media (max-width: 56.25em) {
        width: 95%;
        height: 80%;
      }
    }
    @media (max-width: 56.25em) {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  .exit {
    height: 3.6rem;
    width: 3.6rem;
    background-color: transparent;
    position: fixed;
    top: 5px;
    right: 5px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background-image: linear-gradient(
          to right bottom,
          rgb(102, 201, 255),
          rgb(120, 139, 249)
        );
      }
    }
  }

  .exit__icon {
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 3px;
      display: inline-block;
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      top: 1.6rem;
      -webkit-background-clip: text;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  .heading-tertiary {
    font-size: 3.5rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    color: black;
    background-color: transparent;

    @media (max-width: 56.25em) {
      font-size: 2.5rem;
    }
  }

  .description {
    background-color: orange;
  }

  .keypoints {
    background-color: purple;
  }
`

export default class Modal extends Component {
  render() {
    const modalDetails = this.props.modalDetails
    const showModal = this.props.showModal

    return (
      <ModalWrapper>
        <div className={showModal ? "popup" : "hide-modal"}>
          <div className="popup__content">
            <div className="exit" onClick={() => this.props.closeModal()}>
              <span className="exit__icon">&nbsp;</span>
            </div>
            <h3 className="heading-tertiary">{modalDetails.name}</h3>
            <div className="description">{modalDetails.description}</div>

            {/* <div className="popup__left">{modalDetails.description}</div> */}
            <div className="keypoints">{modalDetails.keyPoints}</div>
            <div className="icons">{modalDetails.icons}</div>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

// "details": {
//   "name": "Nike Mock Up",
//   "description": "nike description",
//   "keyPoints": [
//     "Built a Nike product display page following a micro-service architecture",
//     "Randomly generated 5000+ reviews to consistently correlate with 100 real nike products",
//     "Implemented CRUD operations & sort functionality by querying a Mongo database with nested subdocuments ",
//     "Rendered a single page comprised of 3 services (nav, viewer, reviews) that communicate via url and proxy server "
//   ],
//   "icons": [
//     "MongoDB",
//     "Express.js",
//     "React",
//     "Node.js",
//     "AWS",
//     "Faker.js",
//     "styled-components",
//     "http-proxy",
//     "HTML5",
//     "CSS3"
//   ]
// }
