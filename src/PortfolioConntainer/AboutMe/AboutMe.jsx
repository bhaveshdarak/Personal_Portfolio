import React from 'react'
import "./AboutMe.css"
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
function AboutMe() {
  const SCREEN_CONSTSANTS = {
    description:"I have Knee interest in Web development. Making new product that require innovation and skills motivate me to further enhance myself. I understand the need for planning and analyzing my approach so that I can code better and faster.I known various skills such as HTML,CSS,JavaScript and React.js and I am also a good learner towards a new skills to learn.Also, I am a team player. I like working and interacting with other people.",
    highlights: {
      bullets: [
        "JavaScript",
        "HTML,CSS",
        "Interactive Front End as per the design",
        "React",
        "Building API",
        

      ],
      heading: "Here are a Few Highlights:"
    }
  }

  const renderHighlight = () => {
    return (
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => {
        return (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        )
      })
    )
  }

  return (
    <div id='aboutMe' name="about" className='about-me-container screen-container'>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className="about-me-card">
          <div className="about-me-profile">

          </div>
          <div className="about-me-details">
            <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              {/* <button className='btn primary-btn'>
                Contact Me
              </button> */}
              <a href="Bhavesh Darak Resume.pdf" download="Bhavesh Darak Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe