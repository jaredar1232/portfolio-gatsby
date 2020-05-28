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
      width: 60%;
      height: 8rem;
      background-color: white;
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
    }
  }

  .exit {
    height: 5rem;
    width: 5rem;
    background-color: yellow;
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
              X
            </div>
            <div className="popup__left">{modalDetails.description}</div>
            <div className="popup__right">{modalDetails.keyPoints}</div>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}
