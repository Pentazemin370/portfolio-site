import React from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
type HeaderProps = {};
export const Header = (props) => {
  console.log(props.sections,window.innerHeight,window.scrollY,document.body.scrollHeight);
  const isActiveClass = (top,bottom) : string => {
    
    return -window.innerHeight <= top -100  && bottom - 100 <= window.innerHeight ? 'active' : '';
  }

  return (
    <header className={`${props.scrollY && 'scrolled'}`}>
      <div className="header-container">
        <div className="links-container">
          <a className={isActiveClass(props.sections[0],props.sections[1])} onClick={()=>props.scrollTo(props.sections[0])}>Intro</a>
          <a className={isActiveClass(props.sections[1],props.sections[2])}  onClick={()=>props.scrollTo(props.sections[1])}>Experience</a>
          <a className={isActiveClass(props.sections[2],document?.body?.scrollHeight - window.scrollY)} onClick={()=>props.scrollTo(props.sections[2])}>Projects</a>
        </div>
        <div className="media-links">
          <a href="https://www.linkedin.com/in/dennis-park-ab1987156/" target="_blank" className="header-media-link">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Pentazemin370" target="_blank" className="header-media-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://resume.creddle.io/resume/9drvyepvh8g" target="_blank" className="resume-link">Download Resume</a>
        </div>
      </div>
    </header>
  );
};
