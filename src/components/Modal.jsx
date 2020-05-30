import React, { Component } from "react"
import styled from "styled-components"
import Icons from "../components/Icons.jsx"

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
      max-width: 130rem;
      width: 70%;
      height: 55%;
      background-color: white;
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      overflow: auto;
      ::-webkit-scrollbar {
        width: 0px;
      }

      @media (max-width: 56.25em) {
        width: 95%;
        height: 75%;
        top: 45%;
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
    top: 5rem;
    right: 5rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    z-index: 100;

    @media (max-width: 56.25em) {
      top: 9.6rem;
      right: 2.2rem;
    }

    @media (hover: hover) {
      &:hover {
        background-image: linear-gradient(
          to right bottom,
          rgb(216, 216, 216),
          rgb(216, 215, 215)
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
    }
    &::before {
      top: 1.5rem;
      left: 0.2rem;
      transform: rotate(45deg);
    }
    &::after {
      top: 1.5rem;
      right: 0.2rem;
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
    padding-top: 3rem;

    @media (max-width: 56.25em) {
      font-size: 2.5rem;
    }
  }

  .description {
    font-size: 2rem;
    font-weight: 400;
    color: black;
    padding: 3rem 3rem 5rem 3rem;
  }

  .keypoints {
    font-size: 2rem;
    font-weight: 400;
    color: black;
    list-style-type: none;
    padding: 0 3rem 5rem 3rem;

    li {
      padding-top: 1rem;
    }
  }

  .icons {
    text-align: center;
    padding: 0 2rem;
  }
`

export default class Modal extends Component {
  render() {
    const modalDetails = this.props.modalDetails
    const showModal = this.props.showModal

    return (
      <ModalWrapper>
        <div className={showModal ? "popup" : "hide-modal"}>
          <div className="exit" onClick={() => this.props.closeModal()}>
            <span className="exit__icon">&nbsp;</span>
          </div>
          <div className="popup__content">
            <h3 className="heading-tertiary">{modalDetails.name}</h3>
            <div className="description">
              <b>The Goal:</b>
              {modalDetails.description}
            </div>

            <ul className="keypoints">
              {" "}
              {modalDetails.keyPoints
                ? modalDetails.keyPoints.map(item => (
                    <li key={item.index}>&bull;&ensp;{item}</li>
                  ))
                : null}
            </ul>
            <div className="icons">
              {modalDetails.icons
                ? modalDetails.icons.map(anIcon => (
                    <Icons anIcon={anIcon} key={anIcon} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

// ;<span>
//   <img src={`../../public/${anIcon}.png`}></img>
// </span>

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
