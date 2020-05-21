import React from "react"
import { Helmet } from "react-helmet"

import TopFold from "../components/TopFold.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Resume from "../components/Resume.jsx"
import Contact from "../components/ContactMe.jsx"
import Footer from "../components/Footer.jsx"

const IndexPage = () => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        href="https://jaredsportfolio.s3-us-west-1.amazonaws.com/LogoLight.png"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Helmet>
    <TopFold />
    <AboutMe />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
