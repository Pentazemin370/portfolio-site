import React, { useEffect,useState } from "react";
import Card from "../../components/Card";
import { Icons } from "../../util/utils";
import "./Section.scss";

export const Projects = React.forwardRef((props, ref) => {

  const [hasRendered,setHasRendered] = useState(false);

  useEffect(()=>{
    if(props.visible){
      setHasRendered(true);
    }
  },[props.visible]);

  return (
    <section
      ref={ref}
      className="w-100"
    >
      <div className={`main-container ${hasRendered ? 'animated fadeInUp' : ''}` }>
        <h3>Projects</h3>
        <div className="d-grid">
          <Card>
            <h4>Portfolio Website</h4>
            <p>
              A lightweight React based SPA I made to showcase my work. I opted to build my own webpack configuration,
              avoiding heavy duty frameworks like Create-React-App and Next.js. I then levereged 

            </p>
            <span>
              {[
                Icons.jsIcon,
                Icons.reactIcon,
                Icons.webpackIcon,
                Icons.htmlIcon,
                Icons.cssIcon,
                Icons.sassIcon
              ]}
            </span>
          </Card>
          <Card>
            <h4>Bookmark Sidebar</h4>
            <p>
              A Chrome extension that provides a user-friendly UI for managing
              bookmarks and browsing history. Originally scaffolded using class
              based React components with Redux, I transitioned to pure
              functional components and React hooks for state management.
            </p>
            <span>{[Icons.chromeIcon,Icons.tsIcon,Icons.reactIcon,Icons.webpackIcon,Icons.reduxIcon,Icons.sassIcon]}</span>
          </Card>
        </div>
      </div>
    </section>
  );
});
