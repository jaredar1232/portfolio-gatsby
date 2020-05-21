import React, { Component } from "react";
import styled from "styled-components";
import AProject from "../components/AProject.jsx";

const ProjectsWrapper = styled.div`
  .project-page-buffer {
    background-color: white;
    padding: 10rem 0;
    margin-top: -30vh;

    transform: skewY(-7deg);
    & > * {
      transform: skewY(7deg);
    }
  }

  @media screen and (min-width: 140rem) {
    .project-page-buffer {
      transform: skewY(-4deg);
      & > * {
        transform: skewY(4deg);
      }
    }
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
`;

export default class Projects extends Component {
  render() {
    const projectDataArray = [
      {
        name: "Nike Mock Up",
        width: 90,
        video: "https://jaredsportfolio.s3-us-west-1.amazonaws.com/Nike.mp4",
        github: "https://github.com/jaredar1232/Nike-Mock-Up",
        details: [
          "Built a Nike product display page following a micro-service architecture",
          "Randomly generated 5000+ reviews to consistently correlate with 100 real nike products",
          "Implemented CRUD operations & sort functionality by querying a Mongo database with nested subdocuments ",
          "Rendered a single page comprised of 3 services (nav, viewer, reviews) that communicate via url and proxy server ",
        ],
      },
      {
        name: "Streak Tracker",
        width: 35,
        video: "https://jaredsportfolio.s3-us-west-1.amazonaws.com/Streak.mp4",
        github: "https://github.com/jaredar1232/Streak-Activity-Tracker",
        details: [
          "Followed monolithic architecture to produce a seamless codebase and practice code review workflow",
          "Utilized Firebase for authentication, adaptable storage, and session state persistence ",
          "Created a habit tracking app from the ground up with a mobile first emphasis",
        ],
      },
      {
        name: "System Design",
        width: 90,
        video:
          "https://jaredsportfolio.s3-us-west-1.amazonaws.com/SystemDesign.mp4",
        github: "https://github.com/jaredar1232/System-Design--BestBuy",
        details: [
          "Expanded data set from 100 unique records to 10,000,000 unique records",
          "Reduced database setup time by 80% by using automated CSV generation and batch import (~12 min down to ~2.5 min) ",
          "Optimized query times between Mongoose ODM, MongoDB, and PostgreSQL; used indexing to reduce queries to an average of under 0.1 ms per request ",
          "Deployed separate database and server; optimized 1 EC2 instance to 2000 rps, 0% error rate, and 126ms average response time and 3 nginx load balanced EC2 instances to 3000 rps, 0% error rate, and 63ms response time",
        ],
      },
    ];
    return (
      <ProjectsWrapper>
        <section className="project-page-buffer">
          <div className="u-center-text">
            <h2 className="heading-secondary">Applications</h2>
          </div>
          {projectDataArray.map((aProject) => (
            <AProject aProject={aProject} key={aProject.name} />
          ))}
        </section>
      </ProjectsWrapper>
    );
  }
}
