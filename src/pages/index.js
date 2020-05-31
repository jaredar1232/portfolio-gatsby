import React from "react"
import { Helmet } from "react-helmet"

import Navbar from "../components/Navbar.jsx"
import TopFold from "../components/TopFold.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Resume from "../components/Resume.jsx"
import Contact from "../components/ContactMe.jsx"
import Footer from "../components/Footer.jsx"
import Arrow from "../components/Arrow.jsx"

const IndexPage = () => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        href="https://jared-rothenbergs-portfolio.s3-us-west-1.amazonaws.com/logoCropped.png"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0"
      ></meta>
    </Helmet>
    <Arrow />
    <TopFold />
    <AboutMe />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
