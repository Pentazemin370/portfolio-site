import React from "react";
import Card from "../../components/Card";
import "./Section.scss";

export const Projects = React.forwardRef<HTMLElement>((_,ref) => {
  return (
    <section ref={ref} style={{ display:'flex', width: window.innerWidth, height: window.innerHeight }}>
      <div className="main-container">
          <h3>Projects</h3>
          <Card>
            <h4>Portfolio Website</h4>
            <p>A lightweight and maintainable ReactJS SPA I made to showcase my work. To avoid unecessary bloat, 
              I opted to build my own webpack configuration, avoiding frameworks like Create-React-App and css pre-processors such as Sass.
              </p>
          </Card>
      </div>
    </section>
  );
});
