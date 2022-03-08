import React, { useEffect, useRef, useState } from "react";
import "./Section.scss";
import { Icons } from "../../util/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export const About = React.forwardRef((props, ref) => {
  const [hasRendered,setHasRendered] = useState(0);
  const iconsRefA = useRef(null);
  const iconsRefB = useRef(null);
  useEffect(()=>{
    if(props.visible && !hasRendered){
      setHasRendered(1);
    }
    return ()=>{};
  },[props.visible]);

  useEffect(()=>{
    if(hasRendered < 2){
      let icons;
      if(iconsRefA.current && props.scrollY > iconsRefA.current.getBoundingClientRect().top){
        icons = [...iconsRefA.current.children];
        icons.forEach((a,i)=>{
          setTimeout(()=>a.classList.add('fadeInRight','animated'),50*i);
        });
      }
      if(iconsRefB.current && props.scrollY > iconsRefB.current.getBoundingClientRect().top){
        icons = [...iconsRefB.current.children];
        icons.forEach((a,i)=>{
          setTimeout(()=>a.classList.add('fadeInRight','animated'),50*i);
        });
        setHasRendered(2);
      }
    }
    return ()=>{};
  },[props.scrollY]);

  return (
    <section ref={ref} className="section-container w-100">
      <div  className={`main-container dynamic d-flex flex-column ${hasRendered ? 'animated fadeInUp' : ''}`}>
        <h3>About Me</h3>
        <div className="section-body">
          <p>
            I'm a software engineering specialist at{" "}
            <a
              className="text-link"
              href="https://www.accenture.com/us-en/industries/afs-index"
              target="_blank"
            >
              Accenture Federal Services
            </a>
            . I have worked with multiple teams to deliver features on Federal
            Student Aid's official website and mobile web app.
          </p>
          <h4>Some tools and languages I use on the job:</h4>
          <span ref={iconsRefA} className={`icons-container d-flex flex-wrap`}>
            {[
              Icons.jsIcon,
              Icons.tsIcon,
              Icons.sassIcon,
              Icons.cssIcon,
              Icons.bootstrapIcon,
              Icons.htmlIcon,
              Icons.angularIcon,
              Icons.ionicIcon,
              Icons.storybookIcon,
              Icons.javaIcon,
              Icons.springIcon,
              Icons.jenkinsIcon,
              Icons.gitlabIcon
            ]}
          </span>
          <p>
            For more information on my work experience, please have a look at my{" "}
            <a
              className="text-link"
              target="_blank"
              href="https://resume.creddle.io/resume/9drvyepvh8g"
            >
              resume
            </a>
            .
          </p>
          <p>I also enjoy learning and applying new skills on my own time.</p>
          <h4>This website was built with:</h4>
          <span ref={iconsRefB} className={`icons-container d-flex flex-wrap`}>
            {[
              Icons.jsIcon,
              Icons.reactIcon,
              Icons.webpackIcon,
              Icons.htmlIcon,
              Icons.cssIcon,
              Icons.sassIcon,
            ]}
          </span>
        </div>
        <button className="next-section-button" onClick={props.scrollToNext}>
          Read more about it and other projects{" "}
          <FontAwesomeIcon icon={faArrowDown}/>
        </button>
      </div>
    </section>
  );
});
