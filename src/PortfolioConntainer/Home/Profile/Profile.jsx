import React from 'react'
import Typical from "react-typical"


import "./Profile.css"
function Profile() {


    return (
        <div className='profile-container'>
   
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            
                            <a href="https://linkedin.com/in/bhavesh-darak-7a1a5721b" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/bhavesh.darak07/" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/BhaveshDarak?t=bukvbmX1ysggmI_6757Png&s=09" target="_blank">
                                <i className="fa-brands fa-square-twitter"></i>
                            </a>
                            <a href="https://github.com/bhaveshdarak" target="_blank"> 
                            <i class="fa-brands fa-square-github"></i>
                            </a>
                        </div>

                    </div>

                    <div className="profile-details-name">
                        <span className='primart-text'>
                            {""}
                            Hello,I'm <span className='highlighted-text'>Bhavesh</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {""}
                            <h1>
                               
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev 🖥",
                                        1000,
                                        "Frontend Dev 💾",
                                        1000,
                                        "React Dev 🖥",
                                        1000,
                                    ]}
                                />
                            </h1>

                            <span className='profile-role-tagline'>
                                Ehusiastic Developer with Frontend ability to develop web apps
                            </span>
                        </span>
                    </div>
                    
                    <div className="profile-options">
                        {/* <button className='btn primary-btn' 
                         
                         >
                              Contact Me
                         </button> */}
                         <a href="Bhavesh Darak Resume.pdf" download="Bhavesh Darak Resume.pdf">
                             <button className="btn highlighted-btn">Get Resume</button>
                         </a>
                     </div>
                 </div>
                 <div className="profile-picture">
                     <div className="profile-picture-background">
 
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default Profile

