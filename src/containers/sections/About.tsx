import React from "react";
import "./Section.scss";

export const About = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="section-container" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <div className="main-container">
        <h3>About Me</h3>
        <p>
          I'm a senior developer and team lead at{" "}
          <a href="https://www.accenture.com/us-en/industries/afs-index" target="_blank">
            Accenture Federal Services
          </a>
          . I have worked with multiple teams to deliver features on Federal
          Student Aid's official website and mobile web app.
        </p>
        <h4>Some tools and languages I use on the job:</h4>
        <span className="d-flex flex-wrap">
          <i className="devicon devicon-javascript-plain colored"></i>
          <i className="devicon devicon-typescript-plain colored"></i>
          <i className="devicon devicon-sass-plain colored"></i>
          <i className="devicon devicon-css3-plain colored"></i>
          <i className="devicon devicon-bootstrap-plain colored"></i>
          <i className="devicon devicon-html5-plain colored"></i>
          <i className="devicon devicon-angularjs-plain colored"></i>
          <i className="devicon devicon-ionic-original colored"></i>
          <i className="devicon devicon-java-plain colored"></i>
          <i className="devicon devicon-spring-plain colored"></i>
          <i className="devicon devicon-jenkins-plain colored"></i>
        </span>
        <p>For more information on my work experience, please have a look at my <a target="_blank" href="https://resume.creddle.io/resume/9drvyepvh8g">resume</a>.</p>
        <p>I also enjoy learning and applying new skills on my own time.</p>
        <h4>This website was built using self-taught knowledge of:</h4>
        <span className="d-flex flex-wrap">
          <i className="devicon devicon-javascript-plain colored"></i>
          <i className="devicon devicon-typescript-plain colored"></i>
          <i className="devicon devicon-react-original colored"></i>
          <i className="devicon devicon-webpack-plain colored"></i>
          <i className="devicon devicon-html5-plain colored"></i>
          <i className="devicon devicon-css3-plain colored"></i>
        </span>
        <p>I chose React as my framework, with a simple custom Webpack configuration for managing modules and assets. I avoided
          css pre-processors (Sass/SCSS) and libraries like Bootstrap. I felt that this minimalistic stack would fit the small scale
          of a portfolio perfectly. Arguably I could have left out Typescript as well, but the safety it provides outweighs the small
          performance hit in my mind.
        </p>
        <button>See more projects</button>
      </div>
    </section>
  );
});
