import React, { useState } from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import { Icons } from "../../util/utils";
export const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  //breakpoint to switch to hamburger menu
  const breakpoint = 900;

  const isActiveClass = (top, bottom) => {
    return -window.innerHeight <= top - 150 &&
      bottom - 150 <= window.innerHeight
      ? "active"
      : "";
  };

  const desktopView = () => (
    <header className={`${props.scrollY && "scrolled"}`}>
      <div className="header-container">
        <div className="links-container">
          <a
            
            className={`section-link ${isActiveClass(props.sections[0], props.sections[1])}`}
            onClick={() => props.scrollTo(props.sections[0])}
          >
            Intro
          </a>
          <a
            className={'section-link '+isActiveClass(props.sections[1], props.sections[2])}
            onClick={() => props.scrollTo(props.sections[1])}
          >
            Experience
          </a>
          <a
            className={'section-link '+isActiveClass(
              props.sections[2],
              document?.body?.scrollHeight - window.scrollY
            )}
            onClick={() => props.scrollTo(props.sections[2])}
          >
            Projects
          </a>
        </div>
        <div className="media-links">
          <a
            href="https://www.linkedin.com/in/dennis-park-ab1987156/"
            target="_blank"
            className="header-media-link"
          >
            {Icons.linkedinIcon}
          </a>
          <a
            href="https://github.com/dennispark0"
            target="_blank"
            className="header-media-link"
          >
            {Icons.githubIcon}
          </a>
          <a
            href="https://resume.creddle.io/resume/9drvyepvh8g"
            target="_blank"
            className="resume-link"
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );

  const sideNav = () => [
    showMenu && <div key="backdrop" className="backdrop"></div>,
    <nav key="nav" className={`side-nav ${showMenu ? "active" : ""}`}>
      <div className="d-flex flex-column">
        <a
          className="nav-link"
          onClick={() => {
            props.scrollTo(props.sections[0]);
            setShowMenu(false);
          }}
        >
          Intro
        </a>
        <a
          className="nav-link"
          onClick={() => {
            props.scrollTo(props.sections[1]);
            setShowMenu(false);
          }}
        >
          Experience
        </a>
        <a
          className="nav-link"
          onClick={() => {
            props.scrollTo(props.sections[2]);
            setShowMenu(false);
          }}
        >
          Projects
        </a>
        <a
          href="https://www.linkedin.com/in/dennis-park-ab1987156/"
          target="_blank"
          className="nav-link"
        >
          Linkedin {Icons.linkedinIcon}
        </a>
        <a
          href="https://github.com/dennispark0"
          target="_blank"
          className="nav-link"
        >
          Github {Icons.githubIcon}
        </a>
      </div>
    </nav>
  ];

  const mobileView = () => (
    [<header key="mobile-header">
      <div className="d-flex mobile-container">
        <a
          href="https://resume.creddle.io/resume/9drvyepvh8g"
          target="_blank"
          className="resume-link-mobile"
        >
          <span className="m-auto">Download Resume</span>
        </a>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`menu-toggle ${showMenu ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>,
          sideNav()]
  );

  if (props.windowSize != null) {
    return props.windowSize[0] > breakpoint ? desktopView() : mobileView();
  } else {
    return null;
  }
};
