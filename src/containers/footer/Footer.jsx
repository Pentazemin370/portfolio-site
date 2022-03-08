import React from "react";
import "./Footer.scss";
import { Icons } from "../../util/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export const Footer = (_) => {
  return (
    <footer>
      <div className="footer-container">
        <a
          className="footer-media-link"
          href="https://www.linkedin.com/in/dennis-park-ab1987156/"
          target="_blank"
        >
          {Icons.linkedinIcon}
        </a>
        <a
          className="footer-media-link"
          href="https://github.com/dennispark0"
          target="_blank"
        >
          {Icons.githubIcon}
        </a>
        <a
          className="footer-media-link"
          href="https://www.instagram.com/arc4nine/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};
