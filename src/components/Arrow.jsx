import React, { Component } from "react"
import styled from "styled-components"

const ArrowWrapper = styled.div`
  .arrow-container {
    // position: relative;
    // z-index: 200;
    // animation-delay: 5s;
    // color: rgb(102, 201, 255);
  }

  /* set arrow positioning */
  .arrow {
    width: 6rem;
    height: 82px;
    position: absolute; /* don't forget set container to relative */
    left: 50%;
    margin-left: -3.5rem;
    bottom: 5%;
    z-index: 999;
  }
  /* set arrow styles */
  .arrow path {
    stroke: #66c9ff;
    stroke-width: 2px;
    fill: transparent;
    animation: down 2.5s infinite;
    animation-delay: 5s;
  }

  /* arrow keyframe animation */
  @keyframes down {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  /* arrow animation delay */
  .arrow path.a1 {
    animation-delay: -1s;
  }
  .arrow path.a2 {
    animation-delay: -0.5s;
  }
  .arrow path.a3 {
    animation-delay: 0s;
  }
`

export default class Arrow extends Component {
  render() {
    return (
      <ArrowWrapper>
        <div className="arrow-container">
          <svg class="arrow">
            <path class="a1" d="M0 0 L30 22 L60 0"></path>
            <path class="a2" d="M0 20 L30 42 L60 20"></path>
            <path class="a3" d="M0 40 L30 62 L60 40"></path>
          </svg>
        </div>
      </ArrowWrapper>
    )
  }
}
