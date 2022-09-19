import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import "./Resume.css"
function Resume() {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});


    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading" name="resume">
                <div className="resume-main-heading">
                    <div className="heading-bullet"> </div>

                    <span>{props.heading ? props.heading : " "}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + " to  " + props.toDate}
                        </div>


                    ) : (
                        <div >
                          {props.link}
                        </div>

                    )}

                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>

        )
    }


    const resumeBullets = [
        { label: "Education", logoSrc: "education.png" },
        { label: "Work History", logoSrc: "work-history.png" },
        { label: "Programming Skills", logoSrc: "programming-skills.png" },
        { label: "Projects", logoSrc: "projects.png" },
        { label: "Interests", logoSrc: "interests.png" },

    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 80 },
        { skill: "Express JS", ratingPercentage: 60 },
        { skill: "NODE JS", ratingPercentage: 60 },
        { skill: "HTML", ratingPercentage: 95 },
        { skill: "CSS", ratingPercentage: 95 },
    ];


    const projectDetails = [
        {
            title: "Booking Application",
            link: <a href="https://github.com/bhaveshdarak/BDbooking" target="_blank"> <i class="fa-brands fa-square-github"></i></a>,
            subHeading: "Techologies Used: React.js",
            description: "Website that bookes the near by best hotel for you"

        },
        {
            title: "Gym Workout",
            link: <a href="https://github.com/bhaveshdarak/gym" target="_blank"> <i class="fa-brands fa-square-github" ></i></a>,
            subHeading: "Techologies Used: React.js,Rapid API",
            description: "Gym Website that gives the idea about exercise"

        },
        {
            title: "E-commerce Website",
            link: <a href="https://github.com/bhaveshdarak/E-commerce-Website" target="_blank"> <i class="fa-brands fa-square-github"></i></a>,
            subHeading: "Techologies Used: HTML,CSS",
            description: "Shopping website"

        },
       
    ];


    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"R.H.V English Medium School Jalna"}
                subHeading={"Schooling"}
                fromDate={"2008"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"VidhyaDham Junior College Aurangabad"}
                subHeading={"Junior School"}
                fromDate={"2018"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"Dr.D.Y. Patil Institute of Engineering, Management and Research, Akurdi, Pune"}
                subHeading={"BE"}
                fromDate={"2020"}
                toDate={"Ongoing"}
            />
        </div>,

        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"Internship Studio"}
                subHeading={"Frontend developer"}
                fromDate={"2022"}
                toDate={"2022"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    Basically it was internship cum course where I want to do course then one mini project was given.
                </span>
            </div>

            <div className="experience-description">
                {/* <span className='resume-description-text'>
                    - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem suscipit expedita iusto magnam, molestias repudiandae modi.
                </span>
                <br />
                <span className='resume-description-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium maiores beatae placeat doloremque
                </span> */}
                {/* <br />
                <span className='resume-description-text'>
                    - Lorem, ipsum dolor sit amet consectetur
                </span> */}
            </div>
        </div>,

        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => {
                return (
                    <div className="skill-parent" key={index}>
                        <div className="heading-bullet"></div>
                        <span>{skill.skill}</span>
                        <div className="skill-percentage">
                            <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage">

                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>,


        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetails, index) => {
                return (
                    <ResumeHeading
                        key={index}
                        heading={projectDetails.title}
                        subHeading={projectDetails.subHeading}
                        description={projectDetails.description}
                        link={projectDetails.link}
                    />
                )
            })}
        </div>,

        <div className="resume-screen-container programming-skills-container" key="interests">
            <ResumeHeading
                heading="Playing cricket"
                // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam illo iure eveniet fu"
            />
            <ResumeHeading
                heading="Watching Movies"
                // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam illo iure eveniet fu"
            />
            <ResumeHeading
                heading="Learning Something New"
                // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam illo iure eveniet fu"
            />
        </div>,


    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => {
            return (
                <div
                    onClick={() => handleCarousal(index)}
                    className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                    key={index}
                >

                    <img className='bullet-logo'
                        src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                        alt='oops,,no internet connection'
                    />
                    <span className='bullet-label'>{bullet.label}</span>
                </div>
            )
        })
    }

    const getResumeScreen = () => {
        return (
            <div className="resume-details-carousal"
                style={carousalOffSetStyle.style}
            >
                {resumeDetails.map((ResumeDetail) => { return (ResumeDetail) })}
            </div>
        );
    };

    return (
        <div className='resume-container screen-container' id='resume'>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />

                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume