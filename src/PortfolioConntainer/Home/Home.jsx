import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import "./Home.css"

import Header from './Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Resume from '../Resume/Resume'
import ContactMe from '../ContactMe.jsx/ContactMe'







function Home() {
  return (
    <div className='home-container' name="home">
      <Header />
      <Profile />
      <Footer />
      <AboutMe />
      <Resume />
       <ContactMe/>
    
    </div>
  )
}

export default Home